//*THIS IS HOW A COMPONENT IS CREATED
import { Component } from '@angular/core';

//the file that is used as the root - which is also displayed on the screen
@Component({
  //here we specify what to be used in order to display the app component (remember this is what we used in the index.html file [in order to display this])
  selector: 'app-root',
  //the actual html file that is placed on top of the index.html file, as such, it's the file that we see
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //these properties are accessible in our templates - that's why the title is accessible in the html file
  title = 'confusion';
}
