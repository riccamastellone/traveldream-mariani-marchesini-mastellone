package store.web;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.mail.Email;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.SimpleEmail;
import traveldream.manager.UtenteMrg;

@ManagedBean(name = "mailBean")
@SessionScoped
public class MailBean implements Serializable {

	private static final long serialVersionUID = 2502104564094834379L;

	private String nome;
	private String telefono;
	private String mail;
	private String messaggio;
	
	private Date date1;
	
	private Date date2;

	@EJB
	private UtenteMrg userMgr;

	public MailBean() {
		this.date1 = new Date();
		this.date2 = new Date();
	}

	public void sendMail() throws EmailException {
		Email email = new SimpleEmail();
		email.setHostName("localhost");
		email.setSmtpPort(25);
		email.setFrom("traveldream@rmdesign.it", "TravelDream");
		email.setSubject("Mail dal sito");
		email.setMsg("Nome " + nome + "\n\rTelefono " + telefono + "\n\rEmail " + mail + "\n\r\n\r" + messaggio);
		email.addTo("riccardo.mastellone@gmail.com");
		email.addTo("seba0691@gmail.com");
		email.send();
		nome = "";
		telefono = "";
		mail = "";
		messaggio = "";

	}

	public void sendListaDesideri() throws EmailException {
		System.out.println(this.mail);

		// Generiamo l'url
		FacesContext context = FacesContext.getCurrentInstance();
		HttpServletRequest request = (HttpServletRequest) context.getExternalContext().getRequest();
		String requestURL = request.getRequestURL().toString();
		String url = requestURL.substring(0, requestURL.substring(0, requestURL.lastIndexOf("/")).lastIndexOf("/"));
		
		//genero date
		String inizio = new SimpleDateFormat("yyyy-MM-dd").format(this.date1);
		String fine = new SimpleDateFormat("yyyy-MM-dd").format(this.date2);
		
		Email email = new SimpleEmail();
		email.setHostName("localhost");
		email.setSmtpPort(25);
		email.setFrom("traveldream@rmdesign.it", "TravelDream");
		email.setSubject("Lista desideri");
		email.setMsg("Hi, I'm " + this.userMgr.getUserDTO().getNome() + ", and this is my wish list.\n\r" + url + "/out/viewlist?user=" + this.userMgr.getUserDTO().getEmail() + "&date1=" + inizio +"&date2=" + fine );
		email.addTo(this.mail);
		email.send();
		System.out.println("invio wish list a " + mail);
		this.date1 = new Date();
		this.date2 = new Date();

	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getMessaggio() {
		return messaggio;
	}

	public void setMessaggio(String messaggio) {
		this.messaggio = messaggio;
	}

	public Date getDate1() {
		return date1;
	}

	public void setDate1(Date date1) {
		this.date1 = date1;
	}

	public Date getDate2() {
		return date2;
	}

	public void setDate2(Date date2) {
		this.date2 = date2;
	}

}
