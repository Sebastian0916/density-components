import { MatMenuComponent } from './menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SizeDirective } from 'src/theme/size.directive';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
  title: 'Angular Material/Menu',
  component: MatMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatMenuModule,MatButtonModule ,BrowserAnimationsModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `<span><mat-menu> es un panel flotante que contiene una lista de opciones.</span>`,
      },
    },
  },
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
      table: {
        category: 'Size',
        defaultValue: { summary: 'medium' },
      },
      description:
        'Los tamaños del menu los define su clase, la cual puede ser: `"small"` `"medium"`<br> La clase se puede aplicar directamente al contenedor padre `<mat-menu>` o directamente aplicar la propiedad `size` a cada uno de los items de la lista.',
    },
  },
} as Meta;

const Template: Story<MatMenuComponent> = (args: MatMenuComponent) => ({
  props: args,
});
export const menu = Template.bind({});
menu.args = {
  size: 'medium',
};
menu.storyName = 'mat-menu';
