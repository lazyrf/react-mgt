import React from 'react';
import {Tag, Space} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import {closeTab, setCurrentMenu} from '../../store/reducers/tab';
import "./index.css";

const CommonTag = () => {
    const tabList = useSelector(state => state.tab.tabList);
    const currentMenu = useSelector(state => state.tab.currentMenu);
    const dispatch = useDispatch();
    const action = useLocation();
    const navigate = useNavigate();

    const handleClose = (tag, index) => {
        let length = tabList.length - 1;
        dispatch(closeTab(tag));

        // 關閉的不是當前的tag
        if (tag.path !== action.pathname) {
            return ;
        }

        if (index === length) {
            const curData = tabList[index - 1];
            dispatch(setCurrentMenu(curData));
            navigate(curData.path);
        } else {
            // 如果tag至少存在一個數據，則選擇後一個tag
            if (tabList.length > 1) {
                // 跳轉到下一個tag
                const nextData = tabList[index + 1];
                dispatch(setCurrentMenu(nextData));
                navigate(nextData.path);
            }
        }
    }

    const handleChange = (tag) => {
        dispatch(setCurrentMenu(tag));
        navigate(tag.path);
    };

    const setTag = (flag, item, index) => {
        return (
            flag ?
            <Tag color="#55acee" closeIcon onClose={() => handleClose(item, index)} key={item.name}>{item.label}</Tag>
            :
            <Tag onClick={() => handleChange(item)} key={item.name}>{item.label}</Tag>
        )
    };

    return (
        <Space
            className="common-tag"
            size={[0, 8]}
            wrap
        >
            {
                currentMenu.name && tabList.map((item, index) => setTag(item.path === currentMenu.path, item, index))
            }
        </Space>
    );
};

export default CommonTag;
