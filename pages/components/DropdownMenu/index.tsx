import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
    HamburgerMenuIcon,
    DotFilledIcon,
} from '@radix-ui/react-icons';

export default () => (
  <DropdownMenu.Root>
    <DropdownMenuTrigger asChild>
        <IconButton aria-label="Customise options" style={{backgroundColor: scrolled > 30 ? 'black' : 'transparent'}}>
            <HamburgerMenuIcon />
        </IconButton>
        </DropdownMenuTrigger>

    <DropdownMenu.Content>
      <DropdownMenu.Label>Label</DropdownMenu.Label>
      <DropdownMenu.Item>…</DropdownMenu.Item>
      <DropdownMenu.Item>…</DropdownMenu.Item>
      <DropdownMenu.Item>…</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);