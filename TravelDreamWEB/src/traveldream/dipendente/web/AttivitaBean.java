package traveldream.dipendente.web;

import java.util.ArrayList;

import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;

import org.primefaces.event.FileUploadEvent;

import com.sun.el.parser.ParseException;

import traveldream.dtos.AttivitaSecondariaDTO;
import traveldream.dtos.HotelDTO;
import traveldream.dtos.VoloDTO;
import traveldream.manager.AttivitaMng;;

@ManagedBean(name = "attivitaBean")
@SessionScoped
public class AttivitaBean {

	@EJB
	private AttivitaMng attivitaMng;

	private AttivitaSecondariaDTO attivita;

	private ArrayList<AttivitaSecondariaDTO> allAttivita;

	public AttivitaBean() {
		this.setAttivita(new AttivitaSecondariaDTO());
	}

	public String aggiungiAttivita() throws ParseException {
		attivitaMng.salvaAttivita(attivita);
		refreshAttivita();
		return "catalogo?faces-redirect=true";

	}
	
	private void refreshAttivita() {
		this.allAttivita = attivitaMng.getAttivita();
	}


	public ArrayList<AttivitaSecondariaDTO> getAllAttivita() {
		if (this.allAttivita == null) {
			refreshAttivita();
		}
		return this.allAttivita;
	}
	
	
	public String goToEdit(AttivitaSecondariaDTO attivita){
		this.attivita = attivita;
		return "edita?faces-redirect=true";

	}
	
	public String aggiornaAttivita() throws ParseException {
		AttivitaSecondariaDTO attivitaDTO = this.attivita;
		this.attivita = new AttivitaSecondariaDTO();
		attivitaMng.aggiornaAttivita(attivitaDTO);
		refreshAttivita();
		return "catalogo?faces-redirect=true";
	}

	public void deleteAttivita(AttivitaSecondariaDTO attivita) {
		attivitaMng.deleteAttivita(attivita);
	}


	public AttivitaSecondariaDTO getAttivita() {
		return attivita;
	}


	public void setAttivita(AttivitaSecondariaDTO attivita) {
		this.attivita = attivita;
	}

}