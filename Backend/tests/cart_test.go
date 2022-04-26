package tests

import ( 
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"testing"
)

func TestAddToCart(t *testing.T) {

	url := "http://127.0.0.1:8000/api/login"
	method := "POST"

	payload := strings.NewReader(`{
    "email":"a@aasbvsf",
    "password":"asdbvfd"
}`)
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
urlnew := "http://127.0.0.1:8000/api/addtocart"
methodnew := "POST"
payload1 := strings.NewReader(`{
    "name":"apple"
}`)
payload2 := strings.NewReader(`{
    "name":""
}`)

	tests := []struct {
		name    string
		args	*strings.Reader 
		statuscode int
	}{
		{
			"Valid add to cart",
			payload1,
			200,
		},
		{
			"Invalid Cart Addition",
			payload2,
			500,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			client := &http.Client {
			}
			req, err := http.NewRequest(methodnew, urlnew, tt.args)
		  
			if err != nil {
			  fmt.Println(err)
			  return
			}
			req.Header.Add("Content-Type", "application/json")
			req.Header.Add("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTEwMzc1NTMsImlzcyI6IjM5In0._0zuMlQdWU4HucsavGKkFdlx68GQQdxEz4pMZf1ubyk")
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