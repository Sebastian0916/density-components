import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FormFieldComponent } from './form-field.component';
import { MaterialModule } from '../../../app/material.module';
import { Sizes } from '../../assets/model/modelo.model';

export default {
  title: 'Angular Material/Form-field',
  component: FormFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Los campos de formulario permiten al usuario introducir contenido y datos cuando la entrada esperada por el usuario es una sola línea de texto. ',
      },
    },
  },
  argTypes: {
    appearance: {
      options: ['fill', 'outline'],
      control: { type: 'radio' },
      description: `Dentro de la configuracion global para los elementos form-field utilizados en las aplicaciones del marco erp la apariencia por defecto ahora es la de outline. <br><br>`,
      table: {
        defaultValue: { summary: 'outline' },
      },
    },
    size: {
      options: [Sizes.small, Sizes.medium],
      control: { type: 'radio' },
      description: `Ahora los form-field cuentan con una nueva configuracion de estilos la cual añadira una variante de tamaño pequeña denominada <b>small</b>, esta reducira  las dimenciones tanto de altura como de relleno interno del elemento y ahora sera la configuracion por defecto para este elemento.
                Cabe resaltar que la configuracion original de las proporciones de estos elementos se le denominara <b>medium</b> y se podra implemetar este estilo con una clase del mismo nombre.
                `,
      table: {
        defaultValue: { summary: 'small' },
      },
    },
  },
} as Meta;

const Template: Story<FormFieldComponent> = (args: FormFieldComponent) => ({
  props: args,
});
export const variants = Template.bind({});
component: FormFieldComponent;
variants.args = {
  appearance: 'outline',
  size: 'small',
};

variants.storyName = 'mat-form-field';
