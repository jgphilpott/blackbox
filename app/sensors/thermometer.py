def get_temperature(sense_hat, type="raw"):

	raw = sense_hat.get_temperature()
	extra = sense_hat.get_temperature_from_pressure()

	if type == "raw":

		return raw

	elif type == "extra":

		return extra

	elif type == "average":

		return (raw + extra) / 2
