import { MatIconModule } from '@angular/material/icon';
import { IconComponent } from './icon.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SizeDirective } from 'src/theme/size.directive';
export default {
  title: 'Angular Material/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatIconModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `<span>Un Icono es una pieza de elemento visual muy flexible teniendo una variante 'size' que le de tres tipos de tamañaos, asi como tiene la variante  'color' para más diversidad al utilizarlos.</span>`,
      },
    },
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      table: {
        category: 'Size',
        defaultValue: { summary: 'small' },
      },
      description:
        'Los atamaños de los Iconos los define su variante, la cual puede ser: `small` `medium` `large`',
    },
    color: {
      table: {
        category: 'Color',
        defaultValue: { summary: 'primary' },
      },
      description:
        'Los colores de los Iconos los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',
      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<MatIconModule> = (args: MatIconModule) => ({
  props: args,
});
export const configuracion = Template.bind({});
configuracion.args = {
  size: 'small',
  color: 'primary',
};
configuracion.storyName = 'mat-icon';

const iconTemplate: Story = (args) => ({
  props: args,
  template: `<div>
  <mat-icon size="small" color="primary">home</mat-icon>
  <mat-icon size="medium" color="accent">home</mat-icon>
  <mat-icon size="large" color="warn">home</mat-icon>
  </div>`,
});
export const icons = iconTemplate.bind({});
icons.storyName = 'icon-fill';

const iconOutlineTemplate: Story = (args) => ({
  props: args,
  template: `<div>
  <mat-icon size="small" class="material-icons-outlined mat-icon-outline">home</mat-icon>
  <mat-icon size="medium" class="material-icons-outlined mat-icon-outline" color="accent">home</mat-icon>
  <mat-icon class="material-icons-outlined mat-icon-outline" size="large" color="warn">home</mat-icon>
  </div>`,
});
export const iconsOutline = iconOutlineTemplate.bind({});
iconsOutline.storyName = 'icon-outlined';

const iconTwoToneTemplate: Story = (args) => ({
  props: args,
  template: `<div>
  <mat-icon size="small" class="material-icons-two-tone mat-icon-two-tone">home</mat-icon>
  <mat-icon size="medium" class="material-icons-two-tone mat-icon-two-tone">home</mat-icon>
  <mat-icon size="large" class="material-icons-two-tone mat-icon-two-tone">home</mat-icon>
  </div>`,
});
export const iconsTwoTone = iconTwoToneTemplate.bind({});
iconsTwoTone.storyName = 'icon-two-tone';
