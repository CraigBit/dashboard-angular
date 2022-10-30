import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss'],
})
export class ContactsDetailsComponent implements OnInit {
  id!: number;
  user!: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    // здесь идет подписка на парамс, потом id из парамс передается в this.id;
    // передав id из парамс в переменную, мы вызыываем функцию из админ сервиса с this.id в качестве параметра

    // this.activateRoute.params.subscribe((params) => (this.id = params?.['id']));
    // this.user = this.adminService.getPerson(this.id);

    // все подписки нужно удалять в ngDestroy обязательно!!

    this.user = this.activatedRoute.data.pipe(map((data) => data?.['user']));
  }
}
