package tests

import ( 
	"fmt"
	"io/ioutil"
	"net/http"


	"testing"
)

func TestProducts(t *testing.T) {

	url := "http://127.0.0.1:8000/api/products"
	method := "GET"

	tests := []struct {
		name    string

		statuscode int
	}{
		{
			"Valid products Test",

			200,
		},
		
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			client := &http.Client {
			}
			req, err := http.NewRequest(method, url, nil)
		  
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