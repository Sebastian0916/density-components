import { MatChipsModule } from '@angular/material/chips';
import { MatChipComponent } from './mat-chip.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

export default {
  title: 'Angular Material/Chip',
  component: MatChipComponent,
  decorators: [
    moduleMetadata({
      imports: [MatChipsModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Los chips permiten a los usuarios ver información, hacer selecciones, filtrar contenido e ingresar datos, manejando vairantes `size` como para manipular el tamaño y una varainte `color` que nos permitira tener diversos estilos de un chip  .',
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
        'Los atamaños de los chips los define su variante, la cual puede ser: `small` `medium` ',
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
    label: {
      table: {
        category: 'Label',
        defaultValue: { summary: 'mat-chip' },
      },
      description:
        'Los atamaños de los chips los define su variante, la cual puede ser: `small` `medium` ',
    },
    color: {
      table: {
        defaultValue: { summary: 'defaul' },
        category: 'Color',
      },
      description:
        'Los colores de los Chips los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',
      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<MatChipComponent> = (args: MatChipComponent) => ({
  props: args,
});
export const configuracion = Template.bind({});
configuracion.args = {
  size: 'small',
  label: 'mat-Chip',
  // color: 'primary',
};
configuracion.storyName = 'mat-chip';
