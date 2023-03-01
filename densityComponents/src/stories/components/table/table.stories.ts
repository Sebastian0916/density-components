import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
export default {
  title: 'Angular Material/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [MatTableModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          '<mat-table> proporciona una tabla de datos con estilo Material Design que se puede utilizar para mostrar filas de datos.',
      },
    },
  },
  argTypes: {
    size: {
      table: {
        category: 'Size',
        defaultValue: { summary: 'small' },
      },
      options: ['small', 'medium'],
      control: { type: 'radio' },
      description:
        'La altura de un table puede ser modificada usando la propiedad "size". Por defecto, table usa la altura "small", este puede cambiarse a "medium"',
    },
    displayedColumns: {
      table: {
        disable: true,
      },
    },
    dataSource: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: args,
});

export const table = Template.bind({});
table.args = { size: 'small' };
table.storyName = 'mat-table';
