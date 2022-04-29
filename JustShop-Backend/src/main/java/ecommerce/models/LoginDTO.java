package ecommerce.models;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;

public class LoginDTO {
//	@Autowired
//	private PasswordEncoder passwordEncoder;


	private String userid;
	private String pwd;
	private String role;
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "LoginDTO [userid=" + userid + ", pwd=" + pwd + ", role=" + role + "]";
	}
	
	
}
