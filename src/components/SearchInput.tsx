import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

function SearchInput({ onSearchSubmit }: any) {
  const ref = useRef<HTMLInputElement | null>(null);
  return (
    <form
      style={{ width: '100%' }}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(' ref --->', ref?.current?.value);
        onSearchSubmit(ref?.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          ref={ref}
          width={'100%'}
          borderRadius={'lg'}
          variant={'filled'}
          placeholder='Search Games ...'
        ></Input>
      </InputGroup>
    </form>
  );
}

export default SearchInput;
