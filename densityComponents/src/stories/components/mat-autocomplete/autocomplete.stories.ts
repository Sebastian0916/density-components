import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AutocompleteComponent } from './autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

export default {
  title: 'Angular Material/Autocomplete',
  component: AutocompleteComponent,
  decorators: [
    moduleMetadata({
      imports: [MatFormFieldModule, MatInputModule, MatAutocompleteModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: 'AutoComplete',
      },
    },
  },
  argTypes: {
    size: {
      table: {
        category: 'size',
        defaultValue: { summary: 'small' },
      },
      description:
        'Los colores deL toolbar los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',
      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
    },
    color: {
      table: {
        category: 'Color',
        defaultValue: { summary: 'primary' },
      },
      description:
        'Los colores de los form-field los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',
      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
    },
    label: {
      description: 'Form-field',
      table: {
        defaultValue: { summary: 'form-field' },
        category: 'label',
      },
    },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
});
export const formField = Template.bind({});

formField.args = {
  label: 'form-field',
  color: 'primary',
  size: 'small',
};
formField.storyName = 'form-field ';
