


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
  
    //   console.log(items)
    //   console.log(item)
      
      const isExist = items.find((b) => {
          console.log(item.id)
          console.log(b)
         return b.id === item.id
      });
    
      if (isExist) {
        return alert("Already added");
      } else{
          
      const updatedItems = [...items, item];
      
      localStorage.setItem(key, JSON.stringify(updatedItems));
      
      alert("Successfully added");
      }
    };

