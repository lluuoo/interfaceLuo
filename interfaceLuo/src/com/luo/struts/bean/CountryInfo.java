package com.luo.struts.bean;

import com.jite.struts.bean.PageInfo;

public class CountryInfo extends PageInfo {
	private String code;
	private String name;
	private String continent;
	private String region;
	private float surfaceArea;
	private Short indepYear;
	private int population;
	private Float lifeExpectancy;
	private Float gnp;
	private Float gnpold;
	private String localName;
	private String governmentForm;
	private String headOfState;
	private Integer capital;
	private String code2;

	public CountryInfo() {
	}

	public CountryInfo(String code, String name, String continent, String region,
			float surfaceArea, int population, String localName,
			String governmentForm, String code2) {
		this.code = code;
		this.name = name;
		this.continent = continent;
		this.region = region;
		this.surfaceArea = surfaceArea;
		this.population = population;
		this.localName = localName;
		this.governmentForm = governmentForm;
		this.code2 = code2;
	}

	public CountryInfo(String code, String name, String continent, String region,
			float surfaceArea, Short indepYear, int population,
			Float lifeExpectancy, Float gnp, Float gnpold, String localName,
			String governmentForm, String headOfState, Integer capital,
			String code2) {
		this.code = code;
		this.name = name;
		this.continent = continent;
		this.region = region;
		this.surfaceArea = surfaceArea;
		this.indepYear = indepYear;
		this.population = population;
		this.lifeExpectancy = lifeExpectancy;
		this.gnp = gnp;
		this.gnpold = gnpold;
		this.localName = localName;
		this.governmentForm = governmentForm;
		this.headOfState = headOfState;
		this.capital = capital;
		this.code2 = code2;
	}

	public String getCode() {
		return this.code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContinent() {
		return this.continent;
	}

	public void setContinent(String continent) {
		this.continent = continent;
	}

	public String getRegion() {
		return this.region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public float getSurfaceArea() {
		return this.surfaceArea;
	}

	public void setSurfaceArea(float surfaceArea) {
		this.surfaceArea = surfaceArea;
	}

	public Short getIndepYear() {
		return this.indepYear;
	}

	public void setIndepYear(Short indepYear) {
		this.indepYear = indepYear;
	}

	public int getPopulation() {
		return this.population;
	}

	public void setPopulation(int population) {
		this.population = population;
	}

	public Float getLifeExpectancy() {
		return this.lifeExpectancy;
	}

	public void setLifeExpectancy(Float lifeExpectancy) {
		this.lifeExpectancy = lifeExpectancy;
	}

	public Float getGnp() {
		return this.gnp;
	}

	public void setGnp(Float gnp) {
		this.gnp = gnp;
	}

	public Float getGnpold() {
		return this.gnpold;
	}

	public void setGnpold(Float gnpold) {
		this.gnpold = gnpold;
	}

	public String getLocalName() {
		return this.localName;
	}

	public void setLocalName(String localName) {
		this.localName = localName;
	}

	public String getGovernmentForm() {
		return this.governmentForm;
	}

	public void setGovernmentForm(String governmentForm) {
		this.governmentForm = governmentForm;
	}

	public String getHeadOfState() {
		return this.headOfState;
	}

	public void setHeadOfState(String headOfState) {
		this.headOfState = headOfState;
	}

	public Integer getCapital() {
		return this.capital;
	}

	public void setCapital(Integer capital) {
		this.capital = capital;
	}

	public String getCode2() {
		return this.code2;
	}

	public void setCode2(String code2) {
		this.code2 = code2;
	}

}
