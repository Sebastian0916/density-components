import { Meta, Story                  } from '@storybook/angular/types-6-0';
import { moduleMetadata               } from '@storybook/angular';
import { RadioButtonComponent              } from './radio-button.component';
import { Colors, descripcionComponent, Sizes } from '../../assets/model/modelo.model';
import { MaterialModule               } from '../../../app/material.module';

export default {
    title: 'Angular Material/Components/Mat-Radio-Button',
    component: RadioButtonComponent,
      decorators: [
        moduleMetadata({
          imports: [MaterialModule],
     }),
    ],
    argTypes: {
      // color: {
      //   table: {
      //     category: 'color',
      //     defaultValue: { summary: 'Primary'  },
      //   }, 
      //   description:'Radio button ' + descripcionComponent,
      //   options: Colors,
      //   control: { type: 'radio' },
      // },
      size: {
        table: {
        category: 'Sizes',
        defaultValue: { summary: 'Small' },
        options: ['small','medium'],
      },
      description:'Radio button usa por defector el tamaño medium, para hacer uso de tamaño small' + descripcionComponent,
      control: { type: 'radio' },
      }
    },
  } as Meta;

const Template: Story<RadioButtonComponent> = ( args: RadioButtonComponent ) => ({ props: args });

export const RadioButton = Template.bind({});
RadioButton.args = {
};

