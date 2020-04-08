import * as React from 'react';
import styles from './ReactDetaillist.module.scss';
import { IReactDetaillistProps } from './IReactDetaillistProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DetailsListBasicExample} from './DetailsList';

export default class ReactDetaillist extends React.Component<IReactDetaillistProps, {}> {
  public render(): React.ReactElement<IReactDetaillistProps> {
    return (
      <div className={ styles.reactDetaillist }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <h1>DETAILSLIST ITEMS </h1>
              
              {/* <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p> */}
              {/* <p className={ styles.description }>{escape(this.props.description)}</p> */}
             
             <div>
               < DetailsListBasicExample />
             </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
