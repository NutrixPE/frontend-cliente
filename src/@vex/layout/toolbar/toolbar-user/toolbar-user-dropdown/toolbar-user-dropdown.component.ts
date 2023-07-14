import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import icDoNotDisturb from '@iconify/icons-ic/twotone-do-not-disturb';
import icLock from '@iconify/icons-ic/twotone-lock';
import icNotificationsOff from '@iconify/icons-ic/twotone-notifications-off';
import icOfflineBolt from '@iconify/icons-ic/twotone-offline-bolt';
import icPerson from '@iconify/icons-ic/twotone-person';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icVerifiedUser from '@iconify/icons-ic/twotone-verified-user';
import { Icon } from '@visurel/iconify-angular';
import { PopoverRef } from '../../../../components/popover/popover-ref';
import { trackById } from '../../../../utils/track-by';
import { MenuItem } from '../interfaces/menu-item.interface';

export interface OnlineStatus {
  id: 'online' | 'away' | 'dnd' | 'offline';
  label: string;
  icon: Icon;
  colorClass: string;
}

@Component({
  selector: 'vex-toolbar-user-dropdown',
  templateUrl: './toolbar-user-dropdown.component.html',
  styleUrls: ['./toolbar-user-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserDropdownComponent implements OnInit {

  items: MenuItem[] = [
    // {
    //   id: '1',
    //   icon: icAccountCircle,
    //   label: 'My Profile',
    //   description: 'Personal Information',
    //   colorClass: 'text-teal',
    //   route: '/apps/social'
    // },
    // {
    //   id: '2',
    //   icon: icMoveToInbox,
    //   label: 'My Inbox',
    //   description: 'Messages & Latest News',
    //   colorClass: 'text-primary',
    //   route: '/apps/chat'
    // },
    // {
    //   id: '3',
    //   icon: icListAlt,
    //   label: 'My Projects',
    //   description: 'Tasks & Active Projects',
    //   colorClass: 'text-amber',
    //   route: '/apps/scrumboard'
    // },
    // {
    //   id: '4',
    //   icon: icTableChart,
    //   label: 'Billing Information',
    //   description: 'Pricing & Current Plan',
    //   colorClass: 'text-purple',
    //   route: '/pages/pricing'
    // }
  ];

  statuses: OnlineStatus[] = [
    {
      id: 'online',
      label: 'Online',
      icon: icCheckCircle,
      colorClass: 'text-green'
    },
    {
      id: 'away',
      label: 'Away',
      icon: icAccessTime,
      colorClass: 'text-orange'
    },
    {
      id: 'dnd',
      label: 'Do not disturb',
      icon: icDoNotDisturb,
      colorClass: 'text-red'
    },
    {
      id: 'offline',
      label: 'Offline',
      icon: icOfflineBolt,
      colorClass: 'text-gray'
    }
  ];

  activeStatus: OnlineStatus = this.statuses[0];

  trackById = trackById;
  icPerson = icPerson;
  icSettings = icSettings;
  icChevronRight = icChevronRight;
  icArrowDropDown = icArrowDropDown;
  icBusiness = icBusiness;
  icVerifiedUser = icVerifiedUser;
  icLock = icLock;
  icNotificationsOff = icNotificationsOff;

  username: string;

  constructor(private cd: ChangeDetectorRef,
    private popoverRef: PopoverRef<ToolbarUserDropdownComponent>) { }

  ngOnInit() {
    this.username = 'Rocio Nima Sánchez' //localStorage.getItem('username');
  }

  setStatus(status: OnlineStatus) {
    this.activeStatus = status;
    this.cd.markForCheck();
  }

  close() {
    localStorage.removeItem('userToken');
    this.popoverRef.close();
  }

}
