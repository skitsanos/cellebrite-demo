import {createFromIconfontCN} from '@ant-design/icons';
import React from 'react';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1510688_mti6hxaxfge.js',
    extraCommonProps: {
        style: {
            //color: '#444'
        }
    }
});

const FoxxIconsFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2169656_b3h25jp3d9.js'
});

export const FoxxIcons = {
    JSON: <IconFont type={'icon-json'}/>,
    REACT: <IconFont type={'icon-react'}/>,
    NETLIFY: <IconFont type={'icon-netlify'}/>,
    JS: <IconFont type={'icon-js'}/>,
    API: <IconFont type={'icon-api'}/>,
    NGINX: <IconFont type={'icon-nginx'}/>,
    AVOCADO: <IconFont type={'icon-avocado'}/>,
    FOX: <IconFont type={'icon-Fox'}/>
};

const iconStyle = {
    style: {
        height: '1em'
    }
};

export const Icons = {
    ADD: <IconFont type={'icon-plus-circle-outline'}/>,
    EDIT: <IconFont type={'icon-pencil'}/>,
    EDIT_ALT: <IconFont type={'icon-square_pencil'}/>,
    DELETE: <IconFont type={'icon-trash'}/>,
    MORE: <IconFont type={'icon-grid'}/>,
    INFO: <IconFont type={'icon-alert-circle-outline'}/>,

    //menu expand/compress
    MENU_COMPRESS: <IconFont type={'icon-compress-arrows-alt-solid'}/>,
    MENU_EXPAND: <IconFont type={'icon-expand-arrows-alt-solid'}/>,

    //data view icons
    VIEW_TABLE: <IconFont type={'icon-grid'}/>,
    VIEW_LIST: <IconFont type={'icon-view-sequential'}/>,
    VIEW_CARDS: <IconFont type={'icon-view-grid'}/>,
    RELOAD: <IconFont type={'icon-autorenew'}/>,

    SETTINGS: <IconFont type={'icon-settings'}/>,

    REGISTER: <IconFont type={'icon-account-plus'}/>,
    LOGIN: <IconFont type={'icon-account-key'}/>,
    LOGOUT: <IconFont type={'icon-exit-to-app'}/>,

    DASHBOARD: <IconFont type={'icon-apps'}/>,

    ADMIN: <IconFont type={'icon-crown'}/>,
    USERS: <IconFont type={'icon-person_two'}/>,
    USER: <IconFont type={'icon-person'}/>,
    USER_PROFILE: <IconFont type={'icon-account-circle'} {...iconStyle}/>,
    USER_SWITCH: <IconFont type={'icon-account-switch'}/>,
    USER_PLUS: <IconFont type={'icon-person_badge_plus'}/>,
    USER_MINUS: <IconFont type={'icon-person_badge_minus'}/>,

    STAR: <IconFont type={'icon-star-outline'}/>,
    STAR_SELECTED: <IconFont type={'icon-star'}/>,
    STAR_FOLDER: <IconFont type={'icon-folder-star'}/>,

    CLOCK: <IconFont type={'icon-star'}/>,
    CALENDAR: <IconFont type={'icon-calendar'}/>,

    CHECK_SEAL: <IconFont type={'icon-checkmark_seal'}/>,
    CHECK: <IconFont type={'icon-checkmark_alt'}/>,
    WARN: <IconFont type={'icon-alert-outline'}/>,

    MALE: <IconFont type={'icon-gender-male'}/>,
    FEMALE: <IconFont type={'icon-gender-female'}/>,

    LOCK: <IconFont type={'icon-lock-outline'}/>,
    QUESTION: <i className={'far fa-question-circle'}/>,
    SMILE: <i className={'far fa-smile-wink'}/>,
    WALLET: <i className={'fas fa-wallet'}/>,
    MESSAGE: <IconFont type={'icon-email-outline'}/>,

    CLIENTS: <IconFont type={'icon-rectangle_stack_person'}/>,
    PROJECTS: <IconFont type={'icon-folder'}/>,
    MILESTONES: <IconFont type={'icon-flowchart'}/>,
    TASKS: <IconFont type={'icon-tasks'}/>,
    TASK: <IconFont type={'icon-task'}/>,
    TASKS_ADD: <IconFont type={'icon-tasks-add'}/>,
    TASKS_IN_HANDS: <IconFont type={'icon-tasks'}/>,
    ISSUES: <IconFont type={'icon-bug'}/>,
    NOTES: <IconFont type={'icon-file-outline'}/>,

    ORDERS: <IconFont type={'icon-basket'}/>,
    REPORTS: <IconFont type={'icon-chart_bar_square'}/>,
    HISTORY: <IconFont type={'icon-folder-outline'}/>,

    INVOICE: <IconFont type={'icon-doc_plaintext'}/>,
    MONEY: <IconFont type={'icon-cash'}/>,
    MONEY_MULTIPLE: <IconFont type={'icon-cash-multiple'}/>,

    CODE_GITHUB: <IconFont type={'icon-github'}/>,
    CODE_SVN: <IconFont type={'icon-arrow_branch'}/>,
    CODE_OTHER: <IconFont type={'icon-code-tags-check'}/>,

    FOLDER: <IconFont type={'icon-folder'}/>,
    FILE: <IconFont type={'icon-doc'}/>
};