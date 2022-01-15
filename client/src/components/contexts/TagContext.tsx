import * as React from 'react';

interface ITagContext {
  handleChange: (name: string) => void;
  allTags: string[];
  setAllTags: React.Dispatch<React.SetStateAction<string[]>>;
  filteredTags: string[];
  setFilteredTags: React.Dispatch<React.SetStateAction<string[]>>;
}

export const TagContext = React.createContext({} as ITagContext);

interface ITagProvider {
  children: React.ReactNode;
}

const AllTags = ['Html', 'CSS', 'JavaScript', 'ReactJS', 'GitHub', 'TypeScript', 'Celebal'];

export const TagProvider = ({ children }: ITagProvider) => {
  const [filteredTags, setFilteredTags] = React.useState<string[]>([]);
  const [allTags, setAllTags] = React.useState<string[]>(AllTags);

  const handleChange = (name: string) => {
    // eslint-disable-next-line prefer-const
    let temp = filteredTags;
    if (temp.includes(name)) {
      temp.splice(temp.indexOf(name), 1);
    } else {
      temp.push(name);
    }
    setFilteredTags(() => [...temp]);
  };

  React.useEffect(() => {
    console.log('Data IN Context - ', allTags, filteredTags);
  }, []);

  React.useEffect(() => {
    console.log('Tags in Context - ', filteredTags);
  }, [filteredTags]);

  return (
    <TagContext.Provider
      value={{
        handleChange,
        allTags,
        setAllTags,
        setFilteredTags,
        filteredTags,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};
