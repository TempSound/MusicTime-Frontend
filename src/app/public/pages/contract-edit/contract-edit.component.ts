import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EventService } from '../../../services/event/event.service';
import { UserService } from '../../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEvent } from '../../models/Event';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';
import {CustomerDetails} from "../../models/CustomerDetails";
import {MusicalDetails} from "../../models/MusicalDetails";

@Component({
  selector: 'app-contract-edit',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormField, MatInputModule, MatButtonModule, MatDatepickerModule, MatSelectModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contract-edit.component.html',
  styleUrl: './contract-edit.component.css'
})
export class ContractEditComponent implements OnInit {
  myForm!: FormGroup;
  customer!: CustomerDetails;
  musical!: MusicalDetails;
  event!: IEvent;


  constructor(private eventService: EventService, private formBuilder: FormBuilder, private userService: UserService, private activated: ActivatedRoute, private snack: MatSnackBar, private router: Router) { }
  ngOnInit(): void {
    this.load()
    this.getEvent()
  }
  getEvent() {
    let id = this.activated.snapshot.params['id'];
    this.eventService.getEvent(Number(id)).subscribe(
      (data: IEvent) => {
        this.event = data;
        this.myForm.get('address')?.setValue(data.address);
        this.myForm.get('amount')?.setValue(data.amount);
        this.myForm.get('initialDate')?.setValue(data.initialDate);
        this.myForm.get('hours')?.setValue(data.hours);
        this.myForm.get('typeContract')?.setValue(data.typeContact);
        this.myForm.get('reason')?.setValue(data.reason);
      },
      error => {
        console.log(error);
      }
    )
  }
  load() {
    this.myForm = this.formBuilder.group({
      initialDate: ['', Validators.required],
      address: ['', Validators.required],
      reason: ['', Validators.required],
      typeContract: ['', Validators.required],
      hours: [null, [Validators.required, Validators.min(1)]],
      amount: [null, [Validators.required, Validators.min(1)]],
    })
  }
  create() {
    let event: IEvent = {
      id: this.event.id,
      address: this.myForm.get('address')?.value,
      reason: this.myForm.get('reason')?.value,
      typeContact: this.myForm.get('typeContract')?.value,
      hours: this.myForm.get('hours')?.value,
      amount: this.myForm.get('amount')?.value,
      customer: { id: this.event.customer.id },
      musical: { id: this.event.musical.id },
      initialDate: this.myForm.get('initialDate')?.value,
      status: '0'
    }
    this.eventService.create(event).subscribe(
      (data: IEvent) => {
        this.snack.open('Contract Updated', 'OK', { duration: 4000 })
        this.router.navigate(['contract-view'])
      }, error => {
        console.log(error)
        this.snack.open('Please upload the data correctly', 'OK', { duration: 40000 });
      }
    )
  }
  downloadPDF() {
    this.eventService.getEvent(this.event.id).subscribe(contract => {
      let doc = new jsPDF();
      doc.text('CONTRATO PARA PRESENTACION MUSICAL', 40, 20);

      let text1 = `El cliente ${contract.customer.firstName} ${contract.customer.lastName}, con telefono ${contract.customer.phone} realiza el siguiente contrato para confirmar legalmente el proceso de contratación de un grupo musical o artista solista.`;
      let splitText1 = doc.splitTextToSize(text1, 180);
      doc.text(splitText1, 10, 30);

      let text2 = `El artista ${contract.musical.musicalName}, descrito como ${contract.musical.description}, se compromete a presentarse en el evento organizado por el cliente. El representante del artista es ${contract.musical.managerFirstName} ${contract.musical.managerLastName}, quien puede ser contactado al número ${contract.musical.phone}. Este grupo o artista pertenece al género ${contract.musical.genre} y el tipo de contrato acordado es ${contract.musical.typeContract}.`;
      let splitText2 = doc.splitTextToSize(text2, 180);
      doc.text(splitText2, 10, 60);

      let text3 = `El evento se llevará a cabo en ${contract.address} y está programado para comenzar el ${contract.initialDate}. El motivo del evento es ${contract.reason}. Según lo acordado, el tipo de contrato es ${contract.typeContact} y la presentación del artista o grupo se extenderá por un total de ${contract.hours} horas. El monto total acordado para esta presentación es ${contract.amount} soles.`;
      let splitText3 = doc.splitTextToSize(text3, 180);
      doc.text(splitText3, 10, 100);

      let text4 = `DECLARACIONES
    I. ${contract.customer.firstName} ${contract.customer.lastName}, en lo sucesivo denominado "El Cliente", declara que es una persona física con capacidad legal para contratar y obligarse en términos de este contrato.
    II. ${contract.musical.musicalName}, en lo sucesivo denominada "El artista musical", declara que es una persona física con capacidad legal para recibir contratos y obligarse en términos de este contrato.`;
      let splitText4 = doc.splitTextToSize(text4, 180);
      doc.text(splitText4, 10, 140);

      let text5 = `OBJETO DEL CONTRATO
    III. El Cliente contrata los servicios del Artista musical para la realización de los siguientes trabajos: Presentacion para evento musical.`;
      let splitText5 = doc.splitTextToSize(text5, 180);
      doc.text(splitText5, 10, 190);

      let text6 = `PLAZOS Y TÉRMINOS
    IV. El presente contrato tendrá una vigencia de 1 mes, iniciando el día de envío del contrato y terminando el día después de cumplir un mes (30 días hábiles) luego del inicio.
    V. El artista musical ${contract.musical.musicalName} se compromete a presentarse al evento conforme a la fecha y hora del evento.`;
      let splitText6 = doc.splitTextToSize(text6, 180);
      doc.text(splitText6, 10, 220);


      doc.addPage();


      let text7 = `COMPENSACIÓN Y PAGOS
    VI. El Cliente pagará al artista musical, la cantidad total del monto colocado anteriormente para el contrato, que se realizará de la siguiente manera:
    50% al inicio del contrato.
    50% al finalizar y entregar los servicios acordados.`;
      let splitText7 = doc.splitTextToSize(text7, 180);
      doc.text(splitText7, 10, 10);

      let text8 = `DERECHOS Y OBLIGACIONES
    VII. El Artista musical se compromete a prestar los servicios con la mayor diligencia y profesionalidad, cumpliendo con las especificaciones y requerimientos del Cliente.
    VIII. El Cliente se compromete a proporcionar toda la información y recursos necesarios para que el Artista pueda realizar su trabajo.`;
      let splitText8 = doc.splitTextToSize(text8, 180);
      doc.text(splitText8, 10, 50);

      let text9 = `CONFIDENCIALIDAD
    IX. Ambas partes acuerdan mantener la confidencialidad de toda la información y documentación a la que tengan acceso en virtud de este contrato, tanto durante su vigencia como después de su terminación.`;
      let splitText9 = doc.splitTextToSize(text9, 180);
      doc.text(splitText9, 10, 90);


      let text10 = `RESOLUCIÓN DE DISPUTAS
    X. En caso de controversias o disputas derivadas de este contrato, las partes se comprometen a resolverlas de manera amistosa. Si no es posible, se someterán a mediación o arbitraje conforme a las leyes aplicables establecidas por el gobierno peruano.`;
      let splitText10 = doc.splitTextToSize(text10, 180);
      doc.text(splitText10, 10, 120);

      let text11 = `TERMINACIÓN DEL CONTRATO
    XI. Este contrato podrá ser terminado anticipadamente por cualquiera de las partes mediante notificación escrita con 7 días de antelación.
    XII. En caso de incumplimiento de alguna de las partes, la parte afectada podrá dar por terminado el contrato de forma inmediata, previa notificación por escrito.`;
      let splitText11 = doc.splitTextToSize(text11, 180);
      doc.text(splitText11, 10, 155); // Ajusta la posición y a 350


      let text12 = `Nota: Para validez legal se solicita la firma de ambas partes frente al documento generado por la plataforma MusicTime.`;
      let splitText12 = doc.splitTextToSize(text12, 180);
      doc.text(splitText12, 10, 200); // Ajusta la posición y a 350

      // Agregar línea de firma para el cliente
      doc.text(`Firma del cliente: ${contract.customer.firstName} ${contract.customer.lastName}`, 10, 240); // Ajusta la posición y a 390
      doc.line(10, 230, 80, 230); // Dibuja una línea de (10,395) a (100,395)

      // Agregar línea de firma para el grupo musical
      doc.text(`Firma del artista: ${contract.musical.musicalName}`, 130, 240); // Ajusta la posición y a 390
      doc.line(130, 230, 200, 230); // Dibuja una línea de (130,395) a (220,395)


      doc.save('contract.pdf');
    });
  }
}
