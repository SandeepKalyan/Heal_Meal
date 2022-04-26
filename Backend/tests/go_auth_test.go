package tests

import ( 
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"testing"
)

func TestRegister(t *testing.T) {

	url := "http://127.0.0.1:8000/api/register"
	method := "POST"
	payload := strings.NewReader(`{
    "firstname":"sdsdv",
    "lastname":"aafsbvdfaa",
    "email":"a@aasbvsf",
    "password":"asdbvfd"
}`)

payload1 := strings.NewReader(`{
    "firstname":"sswfwedsdv",
    "lastname":"aafsvsdsdbvdfaa",
    "email":"",
    "password":"asdbvwefrbfd"
}`)

payload2 := strings.NewReader(`{
    "firstname":"sswfwedsdv",
    "lastname":"aafsvsdsdbvdfaa",
    "email":"a@aasbvsf",
    "password":"asdbvwefrbfd"
}`)

	tests := []struct {
		name    string
		args    *strings.Reader
		statuscode int
	}{
		{
			"Valid Registration Test",
			payload,
			200,
		},
		{
			"Empty Registration Test",
			payload1,
			500,
		},
		{
			"Overridden Registration Test",
			payload2,
			500,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			client := &http.Client {
			}
			req, err := http.NewRequest(method, url, payload)
		  
			if err != nil {
			  fmt.Println(err)
			  return
			}
			req.Header.Add("Content-Type", "application/json")
		  
			res, err := client.Do(req)
			if err != nil {
			  fmt.Println(err)
			  return
			}
			defer res.Body.Close()
		  
			body , err := ioutil.ReadAll(res.Body)
			if err != nil {
			  fmt.Println(err)
			  return
			}

			fmt.Println(string(body))

			if res.StatusCode != tt.statuscode {
				t.Fail()
			}
		})
	}
}

func TestLogin(t *testing.T) {

	url := "http://127.0.0.1:8000/api/login"
	method := "POST"
	payload := strings.NewReader(`{
    "email":"a@aasbvsf",
    "password":"asdbvfd"
}`)

payload1 := strings.NewReader(`{
    "email":"",
    "password":"asdbvwefrbfd"
}`)

payload2 := strings.NewReader(`{

    "email":"a@aasbvsf",
    "password":""
}`)

	tests := []struct {
		name    string
		args    *strings.Reader
		statuscode int
	}{
		{
			"Valid Registration Test",
			payload,
			200,
		},
		{
			"Empty Registration Test",
			payload1,
			500,
		},
		{
			"Overridden Registration Test",
			payload2,
			500,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			client := &http.Client {
			}
			req, err := http.NewRequest(method, url, payload)
		  
			if err != nil {
			  fmt.Println(err)
			  return
			}
			req.Header.Add("Content-Type", "application/json")
		  
			res, err := client.Do(req)
			if err != nil {
			  fmt.Println(err)
			  return
			}
			defer res.Body.Close()
		  
			body , err := ioutil.ReadAll(res.Body)
			if err != nil {
			  fmt.Println(err)
			  return
			}

			fmt.Println(string(body))

			if res.StatusCode != tt.statuscode {
				t.Fail()
			}
		})
	}
}