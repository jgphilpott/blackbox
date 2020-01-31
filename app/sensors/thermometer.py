def get_temperature(sense_hat, type="raw"):

	if type == "raw":

		return sense_hat.get_temperature()

	elif type == "extra":

		return sense_hat.get_temperature_from_pressure()

	elif type == "average":

		return (sense_hat.get_temperature() + sense_hat.get_temperature_from_pressure()) / 2
