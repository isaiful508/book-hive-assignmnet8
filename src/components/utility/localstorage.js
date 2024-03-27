
import toast from 'react-hot-toast';





export const getItem = (key) => {
    let items = [];
    const storedItem = localStorage.getItem(key);
  
    if (storedItem) {
      items = JSON.parse(storedItem);
    }
  
    return items;
  };
  
  
  export const saveItem = (key, item) => {
      let items = getItem(key); 
      
      if (!items) {
        items = [];
      }
  
      
      const isExist = items.find((b) => {
          return b.id === item.id
      });
    
      if (isExist) {
        return toast.error("Already Exist");
      } else{
          
      const updatedItems = [...items, item];
      
      localStorage.setItem(key, JSON.stringify(updatedItems));
      
      toast.success('Successfully Added!');
      }
    };

