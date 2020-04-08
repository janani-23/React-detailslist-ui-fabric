import * as React from 'react';
import { DetailsList, DetailsListLayoutMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import pnp from 'sp-pnp-js';

export interface IDetailsListBasicExampleItem {
  
  Title:string;
  Name:string;
  created_date:Date;
  multiline:string;
 
}

export interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
 
}

export class DetailsListBasicExample extends React.Component<{}, IDetailsListBasicExampleState> {
  
  private _allItems: IDetailsListBasicExampleItem[];
  private _columns: IColumn[];
  private _listItem:IDetailsListBasicExampleItem[];
       
   constructor(props: {}) {
    super(props);
       
    this._allItems=[];
    
    pnp.sp.web.lists.getByTitle("customer").items.get().then((res)=>{
      this. _listItem=res;
       console.log(this._listItem);
       this._listItem.forEach(req =>{
        this._allItems.push({
          Title : req.Title,
          Name:req.Name,
          created_date:req.created_date,
          multiline:req.multiline

        });
      });
    });
    
    this._columns = [
      { key: 'column1', name: 'Title', fieldName: 'Title', minWidth: 50, maxWidth: 100, isResizable: true },
      { key: 'column2', name: 'Name', fieldName: 'Name', minWidth: 50, maxWidth: 100, isResizable: true },
      { key: 'column3', name: 'Date', fieldName: 'created_date', minWidth: 50, maxWidth: 100, isResizable: true },
      { key: 'column4', name: 'MultiLine', fieldName: 'multiline', minWidth: 50, maxWidth: 100, isResizable: true ,isMultiline:true},
     
     
    ];

    this.state = {
      items: this. _allItems,
      
    };
  }


  public render(): JSX.Element {
    const { items } = this.state;

    return (
      <Fabric>
        
          <DetailsList
            items={items}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.fixedColumns}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="Row checkbox"
            onItemInvoked={this._onItemInvoked}
            styles={{ root: { maxWidth: '5000px'} }}
          />
        
      </Fabric>
    );
  }

 
  private _onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
    alert(`Item invoked: ${item.Title}`);
  }
}
