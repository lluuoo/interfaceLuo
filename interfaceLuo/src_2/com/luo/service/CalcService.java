package com.luo.service;

public class CalcService {
	public float add(float a, float b) {
		return a + b;
	}

	public float sub(float a, float b) {
		return a - b;
	}

	public float mul(float a, float b) {
		return a * b;
	}

	public float div(float a, float b) throws Exception {
		if (b == 0)
			throw new Exception("除数不能为0!");
		else
			return a / b;
	}

	public double add(double a, double b) {
		return a + b;
	}

	public double sub(double a, double b) {
		return a - b;
	}

	public double mul(double a, double b) {
		return a * b;
	}

	public double div(double a, double b) throws Exception {
		if (b == 0)
			throw new Exception("除数不能为0!");
		else
			return a / b;
	}
}
