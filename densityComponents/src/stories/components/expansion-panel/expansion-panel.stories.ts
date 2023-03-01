import { Meta, Story                  } from '@storybook/angular/types-6-0';
import { moduleMetadata               } from '@storybook/angular';
import { ExpansionPanelComponent      } from './expansion-panel.component';   
import { Colors, descripcionComponent, Sizes } from '../../assets/model/modelo.model';
import { MaterialModule               } from '../../../app/material.module';

export default {
    title: 'Angular Material/components/Mat-expansion-panel',
    component: ExpansionPanelComponent,
      decorators: [
        moduleMetadata({
          imports: [MaterialModule],
     }),
    ],
    argTypes: {
      size: {
        table: {
        category: 'Sizes',
        defaultValue: { summary: 'Small' },
    },
    options: Sizes,
      description:'Radio button usa por defector el tamaño medium, para hacer uso de ' + descripcionComponent,
      control: { type: 'radio' },
      }
    },
  } as Meta;

const Template: Story<ExpansionPanelComponent> = ( args: ExpansionPanelComponent ) => ({ props: args });

export const ExpansionPanel = Template.bind({});
ExpansionPanel.args = {
};

