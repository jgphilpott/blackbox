def get_acceleration(sense_hat, type="raw"):

	if type == "raw":

		return sense_hat.get_accelerometer_raw()

	elif type == "gyro":

		return sense_hat.get_gyroscope_raw()
