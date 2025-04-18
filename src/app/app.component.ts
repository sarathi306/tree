import { Component, VERSION } from '@angular/core';
import { TreeNode } from './tree-node';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  TREE_DATA: TreeNode[] = [
    {
      name: 'CEO',
      color: 'level-1',
      children: [
        {
          name: 'Director A',
          color: 'level-2',
          children: [
            {
              name: 'Manager A',
              color: 'level-3',
              children: [
                { name: 'Person A' },
                { name: 'Person B' },
                { name: 'Person C' },
                { name: 'Person D' },
              ],
            },
            {
              name: 'Manager B',
              color: 'level-3',
              children: [
                { name: 'Person A' },
                { name: 'Person B' },
                { name: 'Person C' },
                { name: 'Person D' },
              ],
            },
          ],
        },
        {
          name: 'Director B',
          color: 'level-2',
          children: [
            {
              name: 'Manager C',
              color: 'level-3',
              children: [
                { name: 'Person A' },
                { name: 'Person B' },
                { name: 'Person C' },
                { name: 'Person D' },
              ],
            },
            {
              name: 'Manager D',
              color: 'level-3',
              children: [
                { name: 'Person A' },
                { name: 'Person B' },
                { name: 'Person C' },
                { name: 'Person D' },
              ],
            },
          ],
        },
      ],
    },
  ];
}
