import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
    HamburgerMenuIcon,
} from '@radix-ui/react-icons';

export default () => (
  <DropdownMenu.Root>
    <DropdownMenu.DropdownMenuTrigger asChild>
        <HamburgerMenuIcon />
    </DropdownMenu.DropdownMenuTrigger>

    <DropdownMenu.DropdownMenuContent>
        <DropdownMenu.DropdownMenuRadioGroup>
        <DropdownMenu.DropdownMenuRadioItem value ='home'>Inicio</DropdownMenu.DropdownMenuRadioItem>
        <DropdownMenu.DropdownMenuRadioItem value ='encrypt'>Criptografar</DropdownMenu.DropdownMenuRadioItem>
        <DropdownMenu.DropdownMenuRadioItem value ='decrypt'>Descriptografar</DropdownMenu.DropdownMenuRadioItem>
        </DropdownMenu.DropdownMenuRadioGroup>
    </DropdownMenu.DropdownMenuContent>
  </DropdownMenu.Root>
);