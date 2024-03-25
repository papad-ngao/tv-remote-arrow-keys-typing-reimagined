let array_size = 0

function get_target_char(ref_obj, input_array) {
  const object_keys_of_reference_object = Object.keys(ref_obj)

  let finval = ''
  let termvalcounter = 0

  for (let i = 0; i < object_keys_of_reference_object.length; i++) {
    const item_of_reference_object = ref_obj[
      object_keys_of_reference_object[i]
    ]
    if (input_array.length > 0) {
      if (object_keys_of_reference_object[i].split(' ')[0] == input_array[0]) {
        const object_keys_for_item_of_reference_object = Object.keys(
          item_of_reference_object
        )
        splitted_idx = 0
        for (let j = 0; j < object_keys_for_item_of_reference_object.length; j++) {
          const space_splitted_value = item_of_reference_object[
            object_keys_for_item_of_reference_object[j]
          ].split(' ')
          for (let k = 0; k < space_splitted_value.length; k++) {
            if (input_array.length > 1) {
              if (['up', 'left', 'right', 'down'].indexOf(input_array[1]) == splitted_idx) {
                const key_val_arr = space_splitted_value[k].split('!-')
                if (key_val_arr.length == 1) {
                  if (termvalcounter == 0) {
                    finval = key_val_arr[0]
                    termvalcounter += 1
                  }
                } else if (key_val_arr.length > 1) {
                  for (let i_ = 0; i_ < ((key_val_arr.length + (
                    (2 - (key_val_arr.length % 2)) % 2
                  )) / 2); i_++) {
                    if (input_array.length > 2) {
                      if (['left', 'right'].indexOf(input_array[2]) == i_) {
                        const array_splitting_by_key = key_val_arr.slice(
                          i_ * 2, (i_ + 1) * 2
                        )
                        if (
                          array_splitting_by_key[0].length < 2
                        ) {
                          if (termvalcounter == 0) {
                            finval = array_splitting_by_key[0]
                            termvalcounter += 1
                          }
                        } else if (
                          array_splitting_by_key[0].length == 2
                        ) {
                          if (input_array.length > 3) {
                            if (termvalcounter == 0) {
                              finval = array_splitting_by_key.join('')[
                                ['up', 'left', 'right', 'down'].indexOf(
                                  input_array[3]
                                )
                              ]
                              termvalcounter += 1
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            splitted_idx += 1
          }
        }
      }
    }
  }
  return finval
}

function render_keyboard(ref_obj, arr_val) {
 const obj_keys_ref_obj = Object.keys(ref_obj)
  for (let i = 0; i < obj_keys_ref_obj.length; i++) {
    const key_item = obj_keys_ref_obj[i]
    const key_item_mod = key_item.split(' ')
    const key_row_pack_container = document.createElement('div')
    key_row_pack_container.setAttribute('id', 'key_row_pack_container')
    const obj_keys_item = Object.keys(ref_obj[obj_keys_ref_obj[i]])
    let bundle_idx = 0
    for (let j = 0; j < obj_keys_item.length; j++) {
      const space_split_value = ref_obj[key_item][obj_keys_item[j]].split(' ')
      const key_row_container = document.createElement('div')
      key_row_container.setAttribute('id', 'key_row_container')
      for (let k = 0; k < space_split_value.length; k++) {
        const bundle_array = space_split_value[k].split('!-')
        const bundle_amount = (bundle_array.length + (
            (2 - (bundle_array.length % 2)) % 2
          )) / 2
        const key_bundle_container = document.createElement('div')
        key_bundle_container.setAttribute('id', 'key_bundle_container')
        for (let i_ = 0; i_ < bundle_amount; i_++) {
          const key_pieces_container = document.createElement('div')
          key_pieces_container.setAttribute('id', 'key_pieces_container')
          const pieces_array = bundle_array.slice((i_ * 2), ((i_ * 2) + 2))
          const pieces_amount = pieces_array.length
          for (let j_ = 0; j_ < pieces_amount; j_++) {
            const key_element = document.createElement('div')
            if (pieces_array[j_].length == 2) {
              key_element.setAttribute('id', 'key')
              for (let k_ = 0; k_ < 2; k_++) {
                const svg_rect = document.createElement('rect')
                svg_rect.setAttribute('height', '36')
                svg_rect.setAttribute('width', '36')
                svg_rect.setAttribute('x', '0')
                svg_rect.setAttribute('y', '0')
                svg_rect.setAttribute('fill', '#FFFFFF')
                const svg_text_value = document.createTextNode(pieces_array[j_][k_])
                const svg_text = document.createElement('text')
                svg_text.setAttribute('x', '0')
                svg_rect.setAttribute('y', '0')
                svg_text.appendChild(svg_text_value)
                const svg_element = document.createElement('svg')
                svg_element.setAttribute('height', '30px')
                svg_element.setAttribute('width', '30px')
                svg_element.setAttribute('viewBox', '0 0 36 36')
                svg_element.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
                svg_element.appendChild(svg_rect)
                svg_element.appendChild(svg_text)
                key_element.appendChild(svg_element)
              }
            } else {
              if (pieces_array[j_] == 'Space') {
                key_element.setAttribute('id', 'bar_key')
                key_element.style.marginLeft = '180px'
                key_element.style.alignItems = 'center'
              } else {
                key_element.setAttribute('id', 'long_key')
              }
              const svg_rect = document.createElement('rect')
              svg_rect.setAttribute('height', '36')
              svg_rect.setAttribute('width', '36')
              svg_rect.setAttribute('x', '0')
              svg_rect.setAttribute('y', '0')
              svg_rect.setAttribute('fill', '#FFFFFF')
              const svg_text_value = document.createTextNode(pieces_array[j_])
              const svg_text = document.createElement('text')
              svg_text.setAttribute('x', '0')
              svg_rect.setAttribute('y', '0')
              svg_text.appendChild(svg_text_value)
              const svg_element = document.createElement('svg')
              svg_element.setAttribute('height', '30px')
              svg_element.setAttribute('width', '30px')
              svg_element.setAttribute('viewBox', '0 0 36 36')
              svg_element.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
              svg_element.appendChild(svg_rect)
              svg_element.appendChild(svg_text)
              key_element.appendChild(svg_element)
            }
            if (arr_val.length == 3) {
              if (
                (key_item_mod[0] == arr_val[0])
                && (
                  bundle_idx
                  == ['up', 'left', 'right', 'down'].indexOf(arr_val[1])
                )
                && (['left', 'right'].indexOf(arr_val[2]) == i_)
              ) {
                const key_sign_group_container = document.createElement('div')
                key_sign_group_container.setAttribute(
                  'id', 'key_sign_group_container'
                )

                const ref_key_sign = {
                  "0": "up left",
                  "1": "right down"
                }
                const arr_key_sign = ref_key_sign[j_ + ''].split(' ')
                for (let ij = 0; ij < arr_key_sign.length; ij++) {
                  const gfa = document.createElement('i')
                  gfa.setAttribute('class', `fa-solid fa-arrow-${
                    arr_key_sign[ij]
                  }`)
                  const key_sign_group_member_container = document.createElement(
                    'div'
                  )
                  key_sign_group_member_container.setAttribute(
                    'id', 'key_sign_group_member_container'
                  )
                  key_sign_group_member_container.appendChild(gfa)
                  key_sign_group_container.appendChild(
                    key_sign_group_member_container
                  )
                }

                key_pieces_container.appendChild(key_sign_group_container)
              }
            }
            key_pieces_container.appendChild(key_element)
          }
          if (arr_val.length == 2) {
            if (
              (key_item_mod[0] == arr_val[0])
              && (
                bundle_idx
                == ['up', 'left', 'right', 'down'].indexOf(arr_val[1])
              )
            ) {
              const bundle_ifa = document.createElement('i')
              bundle_ifa.setAttribute('class', `fa-solid fa-arrow-${
                ['left', 'right'][i_]
              }`)
              const bundle_sign_container = document.createElement('div')
              bundle_sign_container.setAttribute(
                'id', 'key_pack_shell_sign_container'
              )
              bundle_sign_container.appendChild(bundle_ifa)
              key_bundle_container.appendChild(bundle_sign_container)
            }
          }
          /*
            if ((key_item_mod[0] == 'down') && (bundle_idx == 0)) {
              const bundle_ifa = document.createElement('i')
              bundle_ifa.setAttribute('class', 'fa-solid fa-arrow-' + [
                'left', 'right'
              ][i_])
              const bundle_sign_container = document.createElement('div')
              bundle_sign_container.setAttribute(
                'id', 'key_pack_shell_sign_container'
              )
              bundle_sign_container.appendChild(bundle_ifa)
              key_bundle_container.appendChild(bundle_sign_container)
              console.log(key_item_mod[0])
              console.log(key_pieces_container)
              console.log('================')
            }
          */
          key_bundle_container.appendChild(key_pieces_container)
        }
          if (arr_val.length == 1) {
            if (key_item_mod[0] == arr_val[0]) {
              const ifa = document.createElement('i')
              ifa.setAttribute('class', 'fa-solid fa-arrow-' + [
                'up', 'left', 'right', 'down'
              ][bundle_idx])
              const streak_sign_container = document.createElement('div')
              streak_sign_container.setAttribute(
                'id', 'key_pack_shell_sign_container'
              )
              streak_sign_container.appendChild(ifa)
              key_row_container.appendChild(streak_sign_container)
            }
          }
        key_row_container.appendChild(key_bundle_container)
        bundle_idx += 1
      }
      key_row_pack_container.appendChild(key_row_container)
    }

    const key_pack_shell_sign_container = document.createElement('div')
    key_pack_shell_sign_container.setAttribute(
      'id', 'key_pack_shell_sign_container'
    )
    const key_pack_shell = document.createElement('div')
    key_pack_shell.setAttribute('id', 'key_pack_shell')
    key_pack_shell.style.paddingLeft = 60 * parseFloat(
      key_item_mod[1]
    ) + 'px'
    if ((arr_val.length == 0) || (arr_val.length == 4)) {
      // create i tag
      const ifa = document.createElement('i')
      // config i tag
      ifa.setAttribute('class', 'fa-solid fa-arrow-' + key_item)
      // add i tag to sign div
      key_pack_shell_sign_container.appendChild(ifa)
      // add sign div to parent
      key_pack_shell.appendChild(key_pack_shell_sign_container)
    }
    key_pack_shell.appendChild(key_row_pack_container)
    document.getElementById('cnvs').appendChild(key_pack_shell)
  }
}

function jsfn() {
  ref_obj = {
    "up 0.067": {
      "0": "~`!-!1!-@2!-#3 $4!-%5!-^6!-&7 *8!-(9!-)0 _-!-+="
    },
    "left 1.5": {
      "0": "Qq!-Ww!-Ee!-Rr Tt!-Yy!-Uu Ii!-Oo!-Pp {[!-}]!-|\\"
    },
    "right 2": {
      "0": "Aa!-Ss!-Dd Ff!-Gg!-Hh Jj!-Kk!-Ll :;!-\"'"
    },
    "down 2.5": {
      "0": "Zz!-Xx!-Cc!-Vv Bb!-Nn!-Mm <,!->.!-?/!-◀■"
    }
  }

  render_keyboard(ref_obj, [])
  document.addEventListener('keydown', function (event) {
    if (event.key.substring(0, 5) == 'Arrow') {
      array_size += 1
      if (array_size > 4) {
        document.getElementById('arrow_array').innerHTML = ''
        array_size = 1
      }
      const ifa = document.createElement('i')
      ifa.setAttribute('class', `fa-solid fa-arrow-${
        event.key.substring(5, event.key.length).toLowerCase()
      }`)
      const streak_sign_container = document.createElement('div')
      streak_sign_container.setAttribute(
        'id', 'key_pack_shell_sign_container'
      )
      streak_sign_container.appendChild(ifa)
      document.getElementById('arrow_array').appendChild(
        streak_sign_container
      )
      const selection_array = document.getElementById(
        'arrow_array'
      ).querySelectorAll('i')
      // console.log(selection_array)
      const arr_val = []
      // document.getElementById('arrow_array').querySelectorAll('i')[0].getAttribute('class').split('-')[3]
      for (let i = 0; i < selection_array.length; i++) {
        arr_val.push(selection_array[i].getAttribute('class').split('-')[3])
      }
      document.getElementById(
        'arrow_array_value'
      ).innerHTML = arr_val
      document.getElementById('cnvs').innerHTML = ''
      const output = get_target_char(ref_obj, arr_val)
      if (output.length > 0) {
        if (output == '◀') {
          const prev_cont = document.getElementById(
            'output'
          ).textContent
          document.getElementById(
            'output'
          ).innerHTML = prev_cont.substring(0, prev_cont.length - 1)
        } else if (output == '■') {
          const prev_cont = document.getElementById(
            'output'
          ).textContent
          document.getElementById(
            'output'
          ).innerHTML = prev_cont + ' '
        } else {
          const prev_cont = document.getElementById(
            'output'
          ).textContent
          document.getElementById(
            'output'
          ).innerHTML = prev_cont + output
        }

      }
      render_keyboard(ref_obj, arr_val)
    }
  })
}