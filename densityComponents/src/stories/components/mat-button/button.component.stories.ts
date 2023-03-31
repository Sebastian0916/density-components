import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { SizeDirective } from 'src/theme/size.directive';

export default {
  title: 'Angular Material/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatButtonModule, MatIconModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Los `<mat-button>` se utilizan principalmente en elementos de acción. Algunos ejemplos incluyen Agregar, Guardar, Eliminar y Registrarse. Cada página puede tener uno o dos botones principales. Cualquier llamada a la acción restante debe representarse como botones secundarios',
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
        'Los atamaños de los botones los define su variante, la cual puede ser: `small` `medium` `large`',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    label: {
      table: {
        category: 'label',
      },
      description: 'Button',
    },
    color: {
      table: {
        defaultValue: { summary: 'primary' },
        category: 'Color',
      },
      description:
        'Los colores de los botones los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',
      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});
export const configuracion = Template.bind({});
configuracion.args = {
  size: 'small',
  color: 'primary',
  label: 'Button',
};
configuracion.storyName = 'mat-button';

const templateIconButton: Story = (args) => ({
  props: args,
  styleUrls: ['./button.component.scss'],
  template: `<button size="small" mat-icon-button color="accent" >
  <mat-icon>home</mat-icon>
</button>
<button mat-icon-button color="accent" >
  <mat-icon>home</mat-icon>
</button>`,
});
export const iconButton = templateIconButton.bind({});

iconButton.storyName = 'icon-button';

const templateFabButton: Story = (args) => ({
  props: args,

  template: ` <button mat-fab size="small">
  <mat-icon>favorite</mat-icon>
</button>
<button mat-fab size="medium">
<mat-icon>favorite</mat-icon>
</button>
<button mat-fab size="large">
<mat-icon>favorite</mat-icon>
</button>`,
});
export const fabButton = templateFabButton.bind({});

fabButton.storyName = 'fab-button';

const templateFabExtendButton: Story = (args) => ({
  props: args,
  styleUrls: ['./button.component.scss'],
  template: ` <button mat-fab extended size="small">
  button
  <mat-icon>favorite</mat-icon>
</button>
<button mat-fab  extended size="medium">
button
<mat-icon>favorite</mat-icon>
</button>
<button extended mat-fab size="large">
button
<mat-icon>favorite</mat-icon>
</button>`,
});
export const fabExtendButton = templateFabExtendButton.bind({});

fabExtendButton.storyName = 'fab-extend-button';
