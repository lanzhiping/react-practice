import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
    display: 'inline-block',
    height: '100%',
};

const menuData = [
    { name: '后台管理首页' },
    { name: '首页图片轮询' },
];

const MenuBar = (props) => (
    <div style={style}>
        <Paper style={{ height: '100%' }}>
            <Menu>
            {
                menuData.map((item) => {
                    let onMenuClick = () => { props.onMenuClick(item); };

                    return (
                        <MenuItem
                            primaryText={item.name}
                            key={item.name.toString()}
                            onClick={onMenuClick}
                        />);
                })
            }
            </Menu>
        </Paper>
    </div>
);


export default MenuBar;
