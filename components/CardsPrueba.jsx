import React from 'react';

const CardsPrueba = () => {
    const cardData = [
        { id: 1  },
        { id: 2  },
        { id: 3  },
        { id: 4   },
        { id: 5  },
        { id: 6   },
        { id: 7   },
        { id: 8  },
      
      ];
    
      const rows = [];
      const cardsPerRow = 4;
    
      for (let i = 0; i < cardData.length; i += cardsPerRow) {
        const rowCards = cardData.slice(i, i + cardsPerRow);
        rows.push(rowCards);
      }
    
      return (
        <div>
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex  justify-center mb-4">
              {row.map(card => (
                <div key={card.id} className="w-1/5 px-4">
                  <div className="border border-gray-300 mb-4 h-80">
                    
                  </div>
                  
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    };

export default CardsPrueba;