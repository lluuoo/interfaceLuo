package com.jite.utils;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Properties;

public class SystemPropties {
	private static Properties pros = new Properties();

	static {
		try {
			pros.load(SystemPropties.class.getClassLoader()
					.getResourceAsStream("configs/system.properties"));

		} catch (IOException e) {
			e.printStackTrace();
		}
		// 以上是加载类时将 Properties 的 load方法去加载配置文件
	}

	private SystemPropties() {
	};

	public static final String getProperties(String key) {
		try {
			String iso = SystemPropties.pros.getProperty(key);
			if (iso != null) {
				return new String(iso.getBytes("ISO8859-1"), "UTF-8");
			} else {
				return "";
			}
		} catch (UnsupportedEncodingException e) {
			return "";
		}
	}
}
