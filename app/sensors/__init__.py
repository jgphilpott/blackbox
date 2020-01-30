from sensors.gyroscope import get_orientation
from sensors.barometer import get_pressure
from sensors.hygrometer import get_humidity
from sensors.thermometer import get_temperature
from sensors.magnetometer import get_compass
from sensors.accelerometer import get_acceleration

def get_readings(sense_hat):

	readings = {
		"orientation": get_orientation(sense_hat),
		"pressure": get_pressure(sense_hat),
		"humidity": get_humidity(sense_hat),
		"temperature": get_temperature(sense_hat),
		"compass": get_compass(sense_hat),
		"acceleration": get_acceleration(sense_hat)
	}

	return readings
