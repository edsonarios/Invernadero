import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">&copy; 2017 - 2018 Patelecom S.R.L.  <br>Todos los derechos reservados
        </span>

    <div class="socials">
    <small style="float:right;"><h6>Desarrollado por: <a href="https://www.facebook.com/nelsonrichardc" target="_blank">RichardSon</a></h6></small>
      <h6>V.2.0</h6>
      <!--<a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>-->
    </div>
  `,
})
export class FooterComponent {
}
