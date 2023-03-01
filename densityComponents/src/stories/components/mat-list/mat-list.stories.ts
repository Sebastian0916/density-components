import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatListComponent } from './mat-list.component';
import { MatListModule } from '@angular/material/list';
import { SizeDirective } from 'src/theme/size.directive';
export default {
  title: 'Angular Material/List',
  component: MatListComponent,
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatIconModule, MatListModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'El componente `<mat-list>` es un componente contenedor que envuelve y formatea una serie de archivos `<mat-list-item>`. Como componente de la lista base, proporciona estilo de Material Design, pero no tiene un comportamiento propio ',
      },
    },
  },
  argTypes: {
    size: {
      table: {
        category: 'Size',
        defaultValue: { summary: 'small' },
      },
      description:
        'Los atamaños de los Iconos los define su variante, la cual puede ser: `small` `medium`',
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<MatListComponent> = (args: MatListComponent) => ({
  props: args,
});

export const list = Template.bind({});
list.args = {
  size: 'small',
};
list.storyName = 'mat-list';

const listTemplate: Story = (args) => ({
  props: args,
  template: `<mat-list>
  <div mat-subheader>Folders</div>
  <mat-list-item >
  Folder 1
    <mat-icon matListItemIcon>folder</mat-icon>
  </mat-list-item>
  <div mat-subheader>Notes</div>
  <mat-list-item >
  Note 1
  <mat-icon matListItemIcon>note</mat-icon>
  </mat-list-item>
  </mat-list>
  <mat-divider></mat-divider>
  <mat-list size="small">
  <div mat-subheader>Folders</div>
  <mat-list-item >
  Folder 1
    <mat-icon matListItemIcon>folder</mat-icon>
  </mat-list-item>
  <div mat-subheader>Notes</div>
  <mat-list-item >
  Note 1
  <mat-icon matListItemIcon>note</mat-icon>
  </mat-list-item>
  </mat-list>`,
});
export const listIcon = listTemplate.bind({});
listIcon.storyName = 'List-Icon';
