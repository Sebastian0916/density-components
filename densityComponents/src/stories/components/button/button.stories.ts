import { Meta, Story                  } from '@storybook/angular/types-6-0';
import { moduleMetadata               } from '@storybook/angular';
import { ButtonComponent              } from './button.component';
import { Colors, descripcionComponent } from '../../assets/model/modelo.model';
export default {
    title: 'Mat-Button',
    component: ButtonComponent,
      decorators: [
        moduleMetadata({
          imports: [ButtonComponent],
     }),
    ],
    argTypes: {
      color: {
        options: Colors,
        control: { type: 'radio' },
        description:'Button ' + descripcionComponent,
        table: {
          defaultValue: { summary: 'Primary' }
        }, 
      },
    },
    parameters: {
      backgrounds: {
        values: [{ name: 'dark', value: '#000' }
        ],
      },
    },
  } as Meta;

const Template: Story<ButtonComponent> = ( args: ButtonComponent ) => ({ props: args });

export const Button = Template.bind({});
Button.args = {};