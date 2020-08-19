import json
import tkinter as tk
from tkinter import filedialog
import matplotlib.pyplot as plt
# Uncomment when finished the script
# root = tk.Tk()
# root.withdraw()
# # open dialog for select file
# file_path = filedialog.askopenfilename()

# Main script
# formart json
latency_values = []
codes = []
dates = []
pending_request = []
concurrency = []
with open("output3.json", "r") as read_file:
    data = json.load(read_file)
    for value in data["intermediate"]:
        latency_values.append(value["latency"])
        codes.append(value["codes"])
        pending_request.append(value["pendingRequests"])
        concurrency.append(value["concurrency"])
        date_formated = value["timestamp"].split("T")[1].split(".")[0]
        dates.append(date_formated)


def formatValue(value, key):
    if not bool(value):
        return 0
    if not key in value:
        return 0
    if value[key] is None:
        return 0
    return int(value[key])


def getValueFromArray(key, array):
    result = map(lambda x: formatValue(x, key), array)
    return list(result)

# def plotValues():


def findAllKeysOnArray(array):
    keys = []
    for obj in array:

        for key in obj.keys():

            if key not in keys:
                keys.append(key)
    return keys


min_values = getValueFromArray("min", latency_values)
# plote min latencies
# plt.figure("1")
# plt.plot(dates, min_values)
# plt.show()

# plt codes
codes_present = findAllKeysOnArray(codes)
codes_200 = getValueFromArray("200", codes)
codes_400 = getValueFromArray("400", codes)
plt.figure("2")
codes_plot = plt.plot(dates, codes_200, 'g', dates, codes_400, 'r')
plt.ylabel("Número de consultas")
plt.xlabel("Instante de inicio del escenario")
plt.xticks(dates, dates, rotation='vertical', fontsize=6)
plt.legend(['codigos 200', 'codigos 400'])
plt.show()

# plt pendingRequests vs concurrency
plt.figure("3")
concurrency_vs_plot = plt.plot(
    dates, pending_request, 'g', dates, concurrency, 'r')
plt.ylabel("Número de consultas")
plt.xlabel("Instante de inicio del escenario")
plt.xticks(dates, dates, rotation='vertical', fontsize=6)
plt.legend(['Solicitudes pendientes', 'concurrencia'])
plt.show()
# plt rps
