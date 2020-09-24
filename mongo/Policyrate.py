import http.client
import json
import datetime
import mysql.connector
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="123456",
  database="mydatabase"
)
mycursor = mydb.cursor()

sql = 'INSERT INTO Policy_Rate (DateTime, DataPolicyRate) VALUES (%s, %s)'

conn = http.client.HTTPSConnection("apigw1.bot.or.th")

headers = {
    'x-ibm-client-id': "1c824d34-66c0-4ee2-8333-f4269d697e64",
    'accept': "application/json"
    }

conn.request("GET", "/bot/public/PolicyRate/v2/policy_rate/", headers=headers)

res = conn.getresponse()
data = res.read()

#print(data.decode("utf-8"))

y = json.loads(data)

val = (y["result"]["timestamp"],y["result"]["data"])

mycursor.execute(sql, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

