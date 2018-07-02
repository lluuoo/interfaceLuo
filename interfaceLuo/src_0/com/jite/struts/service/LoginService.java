package com.jite.struts.service;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLConnection;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.imageio.stream.ImageOutputStream;

import com.jite.utils.VerificationCodeUtil;

public class LoginService {

	private ByteArrayInputStream image;// 图像
	private String str;// 验证码
	private static final int NUMBER = 3;  //验证码的位数
	private BufferedImage bufImage;
	private static final int WIDTH = 60;   
	private static final int HEIGHT = 24;  

	/**
	 * 功能：获取一个验证码类的实例
	 * @return
	 */
	public static LoginService Instance() {
		return new LoginService();
	}

	/**
	 * 功能：产生一个验证码
	 * @author jite
	 * @return 
	 * @return
	 */
	/*private void VerificationCodeUtil() {
		BufferedImage bImage = new BufferedImage(WIDTH, HEIGHT,
				BufferedImage.TYPE_INT_RGB);
		 int randomNum = new Random().nextInt(3);
		 if (randomNum == 0) {
		initNumVerificationCode(bImage);// 数字验证码
		 } else if (randomNum == 1) {
		 initLetterAndNumVerificationCode(image);//字母加数字验证码
		 } else {
		 initChinesePlusNumVerificationCode(image);//汉字加数字验证码
		 }		
	}*/
	
	/**
	 * 功能：产生一个验证码
	 * @author luo
	 * @return
	 */
	private LoginService() {

		Random random = new Random(); // 生成随机类
		String sRand = "";
		String[] letter = { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
				"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
				"W", "X", "Y", "Z" ,"0","1","2","3","4","5","6","7","8","9"};
		for (int i = 0; i < NUMBER; i++) {
			//产生随机字符串
			String rand = letter[random.nextInt(35)];
			sRand += rand;
		}
		this.setStr(sRand);   //赋值验证码
		//System.out.println("VerificationCodeUtil sRand = " + sRand);
	}
	

	/**
	 * 功能：设置第一种验证码的属性
	 */
	public void initNumVerificationCode(BufferedImage bImage) {

		Random random = new Random(); // 生成随机类
		//Graphics g = initImage(bImage, random);  //验证码所在的图形
		Graphics g = bImage.getGraphics();
		String sRand = "";
		for (int i = 0; i < NUMBER; i++) {
			g.setFont(new Font("Arial Bold", Font.PLAIN, 20));
			//产生随机字符串
			String rand = String.valueOf(random.nextInt(10));
			rand = "U";
			sRand += rand;
			// 将认证码显示到图象中
			g.setColor(new Color(20 + random.nextInt(110), 20 + random
					.nextInt(110), 20 + random.nextInt(110)));
			// 调用函数出来的颜色相同，可能是因为种子太接近，所以只能直接生成
			g.drawString(rand, 13 * i + 6, 16);   //可以改变字符间距
			
		}
		//g.drawString(sRand,6,16);  //无法改变字符间距

		this.setStr(sRand);   //赋值验证码 
		// 图象生效
		//下面这3句好像没用呀？？？
		g.dispose();   
		this.setImage(drawImage(bImage));
		this.setBufImage(bImage);
	}

	/**
	 * 功能：设置第二种验证码属性
	 */
	public void initLetterAndNumVerificationCode(BufferedImage image) {

		Random random = new Random(); // 生成随机类
		Graphics g = initImage(image, random);
		String[] letter = { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
				"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
				"W", "X", "Y", "Z" };
		String sRand = "";
		for (int i = 0; i < NUMBER; i++) {
			String tempRand = "";
			if (random.nextBoolean()) {
				tempRand = String.valueOf(random.nextInt(10));
			} else {
				tempRand = letter[random.nextInt(25)];
				if (random.nextBoolean()) {// 随机将该字母变成小写
					tempRand = tempRand.toLowerCase();
				}
			}
			sRand += tempRand;
			g.setColor(new Color(20 + random.nextInt(10), 20 + random
					.nextInt(110), 20 + random.nextInt(110)));
			g.drawString(tempRand, 13 * i + 6, 16);
		}
		this.setStr(sRand);/* 赋值验证码 */
		g.dispose(); // 图象生效
		this.setImage(drawImage(image));
		this.setBufImage(image);
	}

	/**
	 * 功能：设置第三种验证码属性 即：肆+？=24
	 */
	public void initChinesePlusNumVerificationCode(BufferedImage image) {
		String[] cn = { "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖", "拾" };
		Random random = new Random(); // 生成随机类
		Graphics g = initImage(image, random);
		int x = random.nextInt(10) + 1;
		int y = random.nextInt(30);
		this.setStr(String.valueOf(y));
		g.setFont(new Font("Arial Bold", Font.PLAIN, 16));// 设定字体
		g.setColor(new Color(20 + random.nextInt(10), 20 + random.nextInt(110),
				20 + random.nextInt(110)));
		g.drawString(cn[x - 1], 1 * 1 + 6, 16);
		g.drawString("+", 22, 16);
		g.drawString("？", 35, 16);
		g.drawString("=", 48, 16);
		g.drawString(String.valueOf(x + y), 61, 16);
		g.dispose(); // 图象生效
		this.setImage(drawImage(image));
		this.setBufImage(image);
	}

	public Graphics initImage(BufferedImage image, Random random) {
		Graphics g = image.getGraphics(); // 获取图形上下文
		g.setColor(getRandColor(200, 250));// 设定背景色
		g.fillRect(0, 0, WIDTH, HEIGHT);
		g.setFont(new Font("Times New Roman", Font.PLAIN, 14));// 设定字体
		g.setColor(getRandColor(160, 200)); 
		// 随机产生165条干扰线，使图象中的认证码不易被其它程序探测到
		for (int i = 0; i < 165; i++) {
			int x = random.nextInt(WIDTH);
			int y = random.nextInt(HEIGHT);
			int xl = random.nextInt(12);
			int yl = random.nextInt(12);
			g.drawLine(x, y, x + xl, y + yl);
		}
		return g;
	}

	public ByteArrayInputStream drawImage(BufferedImage image) {
		ByteArrayInputStream input = null;
		ByteArrayOutputStream output = new ByteArrayOutputStream();
		try {
			ImageOutputStream imageOut = ImageIO
					.createImageOutputStream(output);
			ImageIO.write(image, "JPEG", imageOut);
			imageOut.close();
			input = new ByteArrayInputStream(output.toByteArray());
		} catch (Exception e) {
			System.out.println("验证码图片产生出现错误：" + e.toString());
		}
		return input;
	}

	/*
	 * 功能：给定范围获得随机颜色
	 */
	private Color getRandColor(int fc, int bc) {
		Random random = new Random();
		if (fc > 255)
			fc = 255;
		if (bc > 255)
			bc = 255;
		int r = fc + random.nextInt(bc - fc);
		int g = fc + random.nextInt(bc - fc);
		int b = fc + random.nextInt(bc - fc);
		return new Color(r, g, b);
	}

	/**
	 * 功能：获取验证码的字符串值
	 * 
	 * @return
	 */
	public String getVerificationCodeValue() {
		return this.getStr();
	}

	/**
	 * 功能：获取验证码的字符串值
	 * 
	 * @return
	 */
	public String getSixCodeValue() {
		Random random = new Random(); // 生成随机类
		String sixCodeStr=random.nextInt(10)+""+random.nextInt(10)+""+random.nextInt(10)+""+random.nextInt(10)+""+random.nextInt(10)+""+random.nextInt(10);
		return sixCodeStr;
	}

	/**
	 * 功能：获取验证码的字符串值
	 * 
	 * @return
	 */
	public String getFourCodeValue() {
		Random random = new Random(); // 生成随机类
		String fourCodeStr=random.nextInt(10)+""+random.nextInt(10)+""+random.nextInt(10)+""+random.nextInt(10);
		return fourCodeStr;
	}

	/**
	 * 功能：获取验证码的字符串值
	 * 
	 * @return
	 */
	public String getThreeCodeValue() {
		Random random = new Random(); // 生成随机类
		String[] letter = { "1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
				"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
				"W", "X", "Y", "Z" };		
		String threeCodeStr=letter[random.nextInt(letter.length)]+letter[random.nextInt(letter.length)]+letter[random.nextInt(letter.length)];
		return threeCodeStr;
	}


	/**
	 * 功能：获取MD5字符串
	 * 
	 * @return
	 */
    public String getMD5Str(String plainText) {
        String re_md5 = new String();
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(plainText.getBytes());
            byte b[] = md.digest();
 
            int i;
 
            StringBuffer buf = new StringBuffer("");
            for (int offset = 0; offset < b.length; offset++) {
                i = b[offset];
                if (i < 0)
                    i += 256;
                if (i < 16)
                    buf.append("0");
                buf.append(Integer.toHexString(i));
            }
 
            re_md5 = buf.toString();
 
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return re_md5;
    }
    
    /**
     * 向指定 URL 发送POST方法的请求
     * 
     * @param url
     *            发送请求的 URL
     * @param param
     *            请求参数，请求参数应该是 name1=value1&name2=value2 的形式。
     * @return 所代表远程资源的响应结果
     */
    public String sendPost(String url, String param) {
        PrintWriter out = null;
        BufferedReader in = null;
        String result = "";
        try {
            URL realUrl = new URL(url);
            // 打开和URL之间的连接
            URLConnection conn = realUrl.openConnection();
            // 设置通用的请求属性
            conn.setRequestProperty("accept", "*/*");
            conn.setRequestProperty("connection", "Keep-Alive");
            conn.setRequestProperty("user-agent",
                    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
            // 发送POST请求必须设置如下两行
            conn.setDoOutput(true);
            conn.setDoInput(true);
            // 获取URLConnection对象对应的输出流
            out = new PrintWriter(conn.getOutputStream());
            // 发送请求参数
            out.print(param);
            // flush输出流的缓冲
            out.flush();
            // 定义BufferedReader输入流来读取URL的响应
            in = new BufferedReader(
                    new InputStreamReader(conn.getInputStream()));
            String line;
            while ((line = in.readLine()) != null) {
                result += line;
            }
        } catch (Exception e) {
            System.out.println("发送 POST 请求出现异常！"+e);
            e.printStackTrace();
        }
        //使用finally块来关闭输出流、输入流
        finally{
            try{
                if(out!=null){
                    out.close();
                }
                if(in!=null){
                    in.close();
                }
            }
            catch(IOException ex){
                ex.printStackTrace();
            }
        }
        return result;
    }       
	/**
	 * 功能：取得验证码图片
	 * 
	 * @return
	 */
	public ByteArrayInputStream getImage() {
		return this.image;
	}

	public String getStr() {
		return str;
	}

	public void setStr(String str) {
		this.str = str;
	}

	public void setImage(ByteArrayInputStream image) {
		this.image = image;
	}

	public void setBufImage(BufferedImage bufImage) {
		this.bufImage = bufImage;
	}

	public BufferedImage getBufImage() {
		return bufImage;
	}

}
