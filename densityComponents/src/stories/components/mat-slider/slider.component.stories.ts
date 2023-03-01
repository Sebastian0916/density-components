import { MatSliderModule } from '@angular/material/slider';
import { SliderComponent } from './slider.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

export default {
  title: 'Angular Material/slider',
  component: SliderComponent,
  decorators: [
    moduleMetadata({
      imports: [MatSliderModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'El paso a paso de Angular Material proporciona un flujo de trabajo similar a un asistente al dividir el contenido en pasos lógicos',
      },
    },
  },
  argTypes: {
    size: {
      description:
        'Los atamaños de los Slider los define su variante, la cual puede ser: `small` `medium` ',
      options: ['small', 'medium'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'small' },
      },
    },
    color: {
      table: {
        defaultValue: { summary: 'primary' },
        category: 'Color',
      },
      description:
        'Los colores de los Slider los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',
      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<SliderComponent> = (args: SliderComponent) => ({
  props: args,
});
export const configuracion = Template.bind({});
configuracion.args = {
  size: 'small',
  color: 'primary',
};
configuracion.storyName = 'mat-slider';
