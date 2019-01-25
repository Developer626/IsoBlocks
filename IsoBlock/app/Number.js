// TODO Document this code
/**
 * Number:
 * A class which holds the blocks in a pattern that is shaped
 * into a number.
 * 
 * @class Number
 * @var {document array} elements     an array of document elements that is used to display blocks on the screen
 * @var {int array}      stopY        the point where blocks will stop on the y-axis when being added
 * @var {int array}      xStarter     holds the x coord where the block will sit to make the number
 * @var {int array}      yStarter     holds the y coord where the block will sit to make the number
 * @var {int array}      zStarter     holds the z coord to give the blocks more depth
 * @var {int}            xOffset      the amount to move the number (all of the blocks) over along the x-axis
 * @var {int}            yOffset      the amount to move the number (all of the blocks) over along the y-axis
 * @var {int}            zOffset      the amount to give the entire number depth compared to other numbers
 * @var {boolean}        addBlocks    an array which holds which blocks are going to be added
 * @var {boolean}        removeBlocks an array which holds which blocks will be removed
 * @var {boolean}        keepBlocks   an array which holds the blocks that are already in place
 * 
*/
export default class Number{

    /** 
     * The constructor takes five variables but only requires two.
     * 
     * @constructor
     * @param {document} element  the document item that is used to display the image on the screen
     * @param {string}   href     the name of the file that is to be displayed
     * @param {int}      x        the offset that will move the entire numbers x-axis
     * @param {int}      y        the offset that will move the entire numbers y-axis
     * @param {int}      z        the offset that will move the entire numbers z-axis
     * 
    */
    constructor(element, href, x = 0, y = 0, z = 0){

      // Booleans that are used to choose which blocks to add and remove from the screen.
      this.addBlocks = [false, false, false, false, false, false, false, false, false, false, false, false, false];
      this.removeBlocks = [false, false, false, false, false, false, false, false, false, false, false, false, false];
      this.keepBlocks = [false, false, false, false, false, false, false, false, false, false, false, false, false];

      this.elements = [];
      this.stopY = []; // The Y coord where the block stops when being dropped in.

      // This holds the base shape coords of the blocks.
      this.xStarter = [80, 100, 120, 60, 100, 40, 60, 80, 20, 60, 0, 20, 40];
      this.yStarter = [0, 10, 20, 10, 30, 20, 30, 40, 30, 50, 40, 50, 60];
      this.zStarter = [1, 2, 3, 2, 4, 3, 4, 5, 4, 6, 5, 6, 7];

      // This moves the entire number around by giving each block an offset.
      this.xOffset = x;
      this.yOffset = y;
      this.zOffset = z;

      if(element !== undefined){
        this.elements.push(element);

        this.elements[0].href = href;
        this.elements[0].x = this.xStarter[0] + this.xOffset;

        // This must be done for the negative pixels to be accepted (0 - 50).
        // By adding randomness, this allows the blocks to drop in at different intervals.
        this.elements[0].y = 0 - 50 - (this.getRandomInt(1, 50) * 5); 
        this.elements[0].z = this.zStarter[0] + this.zOffset;
        this.elements[0].width = 40;
        this.elements[0].height = 40;

        this.stopY.push(this.yStarter[0] + this.yOffset); // The point in which the block stops to help show a number
        
      } 
    }

    /**
     * This method adds a document element that makes up the blocks of the number.
     * 
     * @method addElement
     * @param {document} element the document which is going to be used
     * @param {string} href      the image file to display
     */
    addElement(element, href){
      if(element !== undefined){
              let i = this.elements.length;
              this.elements.push(element);
          
              this.elements[i].href = href;
              this.elements[i].x = this.xStarter[i] + this.xOffset;

              // This must be done for the negative pixels to be accepted (0 - 50).
              // By adding randomness, this allows the blocks to drop in at different intervals.
              this.elements[i].y = 0 - 50 - (this.getRandomInt(1, 50) * 5);
              this.elements[i].z = this.zStarter[i] + this.zOffset;
              this.elements[i].width = 40;
              this.elements[i].height = 40;
        
              this.stopY.push(this.yStarter[i] + this.yOffset); // The point in which the block stops to help show a number
          }
    }

    /**
     * This method delegates which blocks to be added and removed by using
     * a boolean array sent to other methods which will select which blocks
     * to move.
     * 
     * @method setupNext
     * @param {int} num the next number to transform into.
     */
    setupNext(num){
      
      if(num === 0){
        this.setupAddBlocks([true, true,  true, 
                             true,        true, 
                             true, false, true, 
                             true,        true, 
                             true, true,  true]);
        
        this.setupRemoveBlocks([true, true,  true, 
                                true,        true, 
                                true, false, true, 
                                true,        true, 
                                true, true,  true]);
      }else if(num === 1){
        this.setupAddBlocks([false, false, true, 
                             false,        true, 
                             false, false, true, 
                             false,        true, 
                             false, false, true]);
        
        this.setupRemoveBlocks([false, false, true, 
                                false,        true, 
                                false, false, true, 
                                false,        true, 
                                false, false, true]);
        
      }else if(num === 2){
        this.setupAddBlocks([true,  true, true, 
                             false,       true, 
                             true,  true, true, 
                             true,        false, 
                             true,  true, true]);
        
        this.setupRemoveBlocks([true,  true, true, 
                                false,       true, 
                                true,  true, true, 
                                true,        false, 
                                true,  true, true]);
      }else if(num === 3){
        this.setupAddBlocks([true, true,  true, 
                             false,       true, 
                             false, true, true, 
                             false,       true, 
                             true, true,  true]);
        
        this.setupRemoveBlocks([true,  true, true, 
                                false,       true, 
                                false, true, true, 
                                false,       true, 
                                true,  true, true]);
      }else if(num === 4){
        this.setupAddBlocks([true,  false, true, 
                             true,         true, 
                             true,  true,  true, 
                             false,        true, 
                             false, false, true]);
        
        this.setupRemoveBlocks([true,  false, true, 
                                true,         true, 
                                true,  true,  true, 
                                false,        true, 
                                false, false, true]);
      }else if(num === 5){
        this.setupAddBlocks([true, true,  true, 
                             true,        false, 
                             true, true,  true, 
                             false,       true, 
                             true, true,  true]);
        
        this.setupRemoveBlocks([true,  true, true, 
                                true,        false, 
                                true,  true, true, 
                                false,       true, 
                                true,  true, true]);
      }else if(num === 6){
        this.setupAddBlocks([true, true,  true, 
                             true,        false, 
                             true, true,  true, 
                             true,        true, 
                             true, true,  true]);
        
        this.setupRemoveBlocks([true, true,  true, 
                                true,        false, 
                                true, true,  true, 
                                true,        true, 
                                true, true,  true]);
      }else if(num === 7){
        this.setupAddBlocks([true,  true,  true, 
                             false,        true, 
                             false, false, true, 
                             false,        true, 
                             false, false, true]);
        
        this.setupRemoveBlocks([true,  true,  true, 
                                false,        true, 
                                false, false, true, 
                                false,        true, 
                                false, false, true]);
      }else if(num === 8){
        this.setupAddBlocks([true, true,  true, 
                             true,        true, 
                             true, true,  true, 
                             true,        true, 
                             true, true,  true]);
        
        this.setupRemoveBlocks([true, true,  true, 
                                true,        true, 
                                true, true,  true, 
                                true,        true, 
                                true, true,  true]);
      }else if(num === 9){
        this.setupAddBlocks([true,  true,  true, 
                             true,         true, 
                             true,  true,  true, 
                             false,        true, 
                             false, false, true]);
        
        this.setupRemoveBlocks([true,  true,  true, 
                                true,         true, 
                                true,  true,  true, 
                                false,        true, 
                                false, false, true]);
      } 
    }
    
    // This method checks against the current blocks that are already in place
    // and sees which ones need to be added to make the next number.

    /**
     * This method is used to setup the next set of blocks to add to change the 
     * shape of the number. It does this by checking against the current blocks 
     * that are already in place and compares which blocks need to be dropped in.
     * 
     * @method setupAddBlocks
     * @param {boolean} next is an array of booleans that make up the shape 
     *                       of the next number to be replicated.
     */
    setupAddBlocks(next){
      for(let i = 0; i < 13; i++){
        if(this.keepBlocks[i] === next[i]){
          this.addBlocks[i] = false;
        }
        
        if(this.keepBlocks[i] === false && next[i] === true){
          this.addBlocks[i] = true;

          // TODO Testing. The purpose of this is to see if the blocks will
          // be removed if caught in a state between one time change and another.
          // this.keepBlocks[i] =true; //Doesn't seem to work.
        }else {
          this.addBlocks[i] = false;
        }
      }
    }
      
    // This method checks which blocks are needed to be removed to help the
    // next number have its shape.

    /**
     * This method is used to setup the next set of blocks to remove to change the 
     * shape of the number. It does this be comparing the blocks that are in place 
     * and sees which ones need to be removed to make the number the proper shape.
     * 
     * @method setupRemoveBlocks
     * @param {boolean} next is an array of booleans that make up the shape 
     *                       of the next number to be replicated.
     */
    setupRemoveBlocks(next){
      for(let i = 0; i < 13; i++){
        if(this.keepBlocks[i] === next[i]){
          this.removeBlocks[i] = false;
        }
        
        if(this.keepBlocks[i] === true && next[i] === false){
          this.removeBlocks[i] = true;
        }else {
          this.removeBlocks[i] = false;
        }
      }
      
    }
    
    // This method animates the falling blocks and stops them in their place 
    // when they are finished moving

    /**
     * This method animates the changing of number by either adding or removing 
     * blocks.
     * 
     * @method update
     * @returns {boolean} returns true if the blocks have finished moving.
     */
    update(){
      let finished = true;
      
      for(let i = 0; i < 13; i++){
        if(this.addBlocks[i] === true){
          this.elements[i].y += 5;
          finished = false;
          if(this.stopY[i] <= this.elements[i].y){
            this.addBlocks[i] = false;
            this.keepBlocks[i] = true;
          }
        }
        
        if(this.removeBlocks[i] === true){
          this.elements[i].y += 5;
          
          
          finished = false;
          if(252 <= this.elements[i].y){
            this.removeBlocks[i] = false;
            this.keepBlocks[i] = false;

            // This must be done for the negative pixels to be accepted: ex. 0 - 50
            // By adding randomness, this allows the blocks to drop in at different intervals.
            this.elements[i].y = 0 - 50 - (this.getRandomInt(1, 50) * 5);
            
          }
        }
      }
      return finished;
    }

    /**
     * This method us used to return random integer values from a specifide range.
     * Used to have the blocks drop in at different intervals.
     * 
     * @method getRandomInt
     * @param {int} min the minimum integer value that can be returned.
     * @param {int} max the maximum integer value that can be returned.
     */
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
}
  