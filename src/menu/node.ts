//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
//     |  /  __|   \ |       _ \   _ \     This file belongs to Ken-Do,                 //
//     . <   _|   .  | ____| |  | (   |    the open-source cross-platform pie menu.     //
//    _|\_\ ___| _|\_|      ___/ \___/     Read more on github.com/ken-do-menu/ken-do   //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////

// SPDX-FileCopyrightText: Simon Schneegans <code@simonschneegans.de>
// SPDX-License-Identifier: MIT

/**
 * The menu consists of a tree of nodes. Each node represents a menu item. Inner nodes
 * represent submenus, leaf nodes represent actual menu items.
 */
export interface INode {
  /** The name of the menu item. This may be displayed with some kind of label. */
  name: string;

  /** The icon of the menu item. For now, this is only text. */
  icon: string;

  /**
   * The child nodes of this menu item. If this contains items, the node represents a
   * submenu.
   */
  children: Array<INode>;

  /**
   * The direction of the menu item in degrees. If not set, it will be computed when the
   * menu is opened. If set, it is considered to be a "fixed angle" and all siblings will
   * be distributed more or less evenly around.
   */
  angle?: number;

  /**
   * The beginning of the menu item's angular wedge in degrees. This will be computed and
   * set once the menu is opened.
   */
  startAngle?: number;

  /**
   * The end of the menu item's angular wedge in degrees. This will be computed and set
   * once the menu is opened.
   */
  endAngle?: number;

  /**
   * The visual representation of this menu item. This is a div element which is created
   * when the menu is opened.
   */
  div?: HTMLElement;
}
