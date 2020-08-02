package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/smtp"
	"os"
)

// Handler is the Vercel api handler
func Handler(w http.ResponseWriter, r *http.Request) {

	if err := r.ParseForm(); err != nil {
		fmt.Fprintf(w, "ParseForm() err: %v", err)
		return
	}

	from := r.FormValue("from")
	msg := "From: " + from + "\n" +
		"To: " + os.Getenv("EMAIL_TO") + "\n" +
		"Subject: Contact form \n\n" +
		r.FormValue("message")

	err := smtp.SendMail(os.Getenv("EMAIL_SMTP_SERVER")+":"+os.Getenv("EMAIL_SMTP_PORT"),
		smtp.PlainAuth("", os.Getenv("EMAIL_USER"), os.Getenv("EMAIL_PASSWORD"), os.Getenv("EMAIL_SMTP_SERVER")),
		from, []string{os.Getenv("EMAIL_TO")}, []byte(msg))

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	success, _ := json.Marshal(true)
	fmt.Fprintf(w, string(success))

}
