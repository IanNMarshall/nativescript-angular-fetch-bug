import { Component, OnInit } from '@angular/core'

export async function myhttp(
  request: RequestInfo
): Promise<any> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log("MyApp - onInit");
    const body = myhttp("https://jsonplaceholder.typicode.com/todos");
    body.then(body => console.log("MyApp - response", body));
  }
}
