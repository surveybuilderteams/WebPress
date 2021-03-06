<?php
class Utils{
	protected function __construct(){
		
	}
	public static function redirect($title, $desc, $redirect, $type='success'){
		global $lang;
		echo '
		<div class="modal position-static d-block" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content text-light bg-'.$type.'">
        <div class="modal-header">
          <h5 class="modal-title">'.(isset($lang[$title]) ? $lang[$title] : '').'</h5>
        </div>
        <div class="modal-body">
		<center><i class="fas fa-spinner" id="webpress-spinner"></i>
          <p>'.(isset($lang[$desc]) ? $lang[$desc] : '').'</p></center>
        </div>
       
      </div>
    </div>
  </div>
  <script>
  setTimeout(function(){
	  window.open("'.$redirect.'", "_self");
  }, 3000);
  </script>
		';
	}
	public static function change_key( $array, $old_key, $new_key ) {

    if( ! array_key_exists( $old_key, $array ) )
        return $array;

    $keys = array_keys( $array );
    $keys[ array_search( $old_key, $keys ) ] = $new_key;

    return array_combine( $keys, $array );
		}

	public static function profileSave($type, $name, $data){
		global $lang;
			$e = constant('DATA_'.strtoupper($type));
	 $db = json_decode(file_exists($e.$name.'.dat.json') ? file_get_contents($e.$name.'.dat.json') : '', true);
	//$saved	= json_encode($data, JSON_PRETTY_PRINT);
	foreach($data as $d=>$v){
		if($d==="username"){
			$save = array($v=>$db[$_SESSION['user']]);
			$save[$v]['username'] = $v;
			unset($db[$_SESSION['user']]);
			$saveData = json_encode($save, JSON_PRETTY_PRINT);
			file_exists($e.$name.'.dat.json') ? file_put_contents($e.$name.'.dat.json', $saveData) : '';
			$_SESSION['user'] = $v;
		}elseif($d==="name"){
		$db = json_decode(file_exists($e.$name.'.dat.json') ? file_get_contents($e.$name.'.dat.json') : '', true);
		$save = array($_SESSION['user']=>$db[$_SESSION['user']]);
		$save[$_SESSION['user']]['name'] = $v;
		$saveData = json_encode($save, JSON_PRETTY_PRINT);
		file_exists($e.$name.'.dat.json') ? file_put_contents($e.$name.'.dat.json', $saveData) : '';
		}elseif($d==="about"){
		$db = json_decode(file_exists($e.$name.'.dat.json') ? file_get_contents($e.$name.'.dat.json') : '', true);
		$save = array($_SESSION['user']=>$db[$_SESSION['user']]);
		$save[$_SESSION['user']]['about'] = $v;
		$saveData = json_encode($save, JSON_PRETTY_PRINT);
		file_exists($e.$name.'.dat.json') ? file_put_contents($e.$name.'.dat.json', $saveData) : '';
		}elseif($d==="password"){
			
					$psws = explode('+',$v);
					if($psws[0]!==''||$psws[1]!==''){
						if(preg_match('/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/', $psws[0]) && preg_match('/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/', $psws[1])){
				$db = json_decode(file_exists($e.$name.'.dat.json') ? file_get_contents($e.$name.'.dat.json') : '', true);
				$save = array($_SESSION['user']=>$db[$_SESSION['user']]);
				if(password_verify($psws[0], $save[$_SESSION['user']]['psw'])){
				$changepsw = password_hash($psws[1], PASSWORD_BCRYPT, ['cost'=>15]);
				$save[$_SESSION['user']]['psw']= $changepsw;
				$saveData = json_encode($save, JSON_PRETTY_PRINT);
				file_exists($e.$name.'.dat.json') ? file_put_contents($e.$name.'.dat.json', $saveData) : '';	
				}else{
				echo '<div class="alert alert-danger">'.$lang['modal.pedit.psw.match'].'</div>';	
				}
			}else{
				echo '<div class="alert alert-danger">'.$lang['modal.pedit.psw.format'].'</div>';
			}
					}
		}
	}
	
	
	}
	public static function dateTime($dt){
		$days = array('01'=>'01','02'=>'02','03'=>'03','04'=>'04','05'=>'05','06'=>'06','07'=>'07','08'=>'08','09'=>'09','10'=>'10','11'=>'11','12'=>'12','13'=>'13','14'=>'14','15'=>'15','16'=>'16','17'=>'17','18'=>'18','19'=>'19','20'=>'20','21'=>'21','22'=>'22','23'=>'23','24'=>'24','25'=>'25','26'=>'26','27'=>'27','28'=>'28','29'=>'29','30'=>'30','31'=>'31');
		$months = array('01'=>'jan','02'=>'feb','03'=>'mar','04'=>'apr','05'=>'may','06'=>'june','07'=>'july','08'=>'aug','09'=>'sept','10'=>'oct','11'=>'nov','12'=>'dec');
		$year = date('Y');
		if($dt==="days"){
			return $days;
		}elseif($dt==="months"){
			return $months;
		}else{
			return $year;	
		}
	}
	public static function dateTimeData(){
		return array('jan'=>'0,','feb'=>'0,','mar'=>'0,','apr'=>'0,','may'=>'0,','june'=>'0,','july'=>'0,','aug'=>'0,','sept'=>'0,','oct'=>'0,','nov'=>'0,','dec'=>'0,');
	}
	public static function isPost($reciver, $func){
		if(isset($_POST[$reciver])){
		 return $func();
		}
	}
	public static function isGET($reciver, $func){
		if(isset($_GET[$reciver])){
		 return $func();
		}
	}
	public static function isREQUEST($reciver, $func){
		if(isset($_REQUEST[$reciver])){
		 return $func();
		}
	}
	public static function checkVersion(){
		$v1 = file_get_contents(ROOT.'VERSION');
		$v2 = preg_replace('/\n|\s$/','',file_get_contents('https://raw.githubusercontent.com/surveybuilderteams/WebPress/master/VERSION'));
		$checkVer = $v1===$v2 ? true : false;
		$checkVer = $checkVer ? $v1 : $v1.'->'.$v2;
		$args = array(($v1===$v2 ? true : false), $checkVer);
		return $args;
	}
	public static function getVersion(){
		$current = file_get_contents(ROOT.'VERSION');
		return $current;
	}
	public static function getUpdates(){
		global $lang;
		$updates = json_decode(file_get_contents('UPDATES.json'), true);
		$out = '';
		$out .= '<ul class="list-group list-group-flush">';
		if(isset($updates['versions'][Utils::getVersion()]['textsets'])){
			foreach($updates['versions'][Utils::getVersion()]['textsets'] as $main){
					if($main['show']===true){
					$out .= '<li class="list-group-item list-group-item-'.(isset($main['type']) ? $main['type'] : 'success').'"><div role="alert" class="notify-alert fade show '.(isset($main['dismissible'])&&$main['dismissible']===true ? 'alert-dismissible' : '').' alert alert-'.(isset($main['type']) ? $main['type'] : 'success').'">'.(isset($main['icon']) ? '<i class="'.$main['icon'].'"></i> ' : '').$main['text'].(isset($main['dismissible'])&&$main['dismissible']===true ? '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' : '').'</div></li>';
					}else{
					$out.='';
					}
				
			}
		}else{
			if($updates['versions'][Utils::getVersion()]['show']===true){
			$out .= '<li class="list-group-item list-group-item-'.(isset($updates['versions'][Utils::getVersion()]['type']) ? $updates['versions'][Utils::getVersion()]['type'] : 'success').'"><div role="alert" class="notify-alert fade show '.(isset($updates['versions'][Utils::getVersion()]['dismissible'])&&$updates['versions'][Utils::getVersion()]['dismissible']===true ? 'alert-dismissible' : '').' alert alert-'.(isset($updates['versions'][Utils::getVersion()]['type']) ? $updates['versions'][Utils::getVersion()]['type'] : 'success').'">'.(isset($updates['versions'][Utils::getVersion()]['icon']) ? '<i class="'.$updates['versions'][Utils::getVersion()]['icon'].'"></i> ' : '').$updates['versions'][Utils::getVersion()]['text'].(isset($updates['versions'][Utils::getVersion()]['dismissible'])&&$updates['versions'][Utils::getVersion()]['dismissible']===true ? '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' : '').'</div></li>';			
			}else{
			$out.='';
			}

		}
		$out .= '</ul>';
		return $out;
	}
	public static function catche($type){
		$e = constant('DATA_'.strtoupper($type));
		foreach(Files::Scan($e) as $catche){
			if(file_exists($e.$catche.DS)){
				Files::catche($e.$catche.DS);
			}else{
				# nothing
			}
			
		    Files::copyFolder(ROOT.$type.DS.$catche.DS, $e.$catche.DS);
		}
	}
	
}
?>